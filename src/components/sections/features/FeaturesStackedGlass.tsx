import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type StackedGlassItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  button?: { text: string; href: string };
};

type FeaturesStackedGlassProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  items?: StackedGlassItem[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: StackedGlassItem[] = [
  {
    title: "Mapped in a week",
    description: "Tell us how the work moves today. We write it down and plan what to fix first.",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/contact.webp",
    imageAlt: "Man working on a laptop",
    button: { text: "Learn more", href: "#process" },
  },
  {
    title: "Built around your tools",
    description: "Your CRM, inbox, calendar and books finally share the same facts.",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/product-design.webp",
    imageAlt: "Designer sketching layouts",
    button: { text: "Learn more", href: "#process" },
  },
  {
    title: "Run and looked after",
    description: "Everything keeps running, and we keep an eye on it so nothing quietly breaks.",
    imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/website.webp",
    imageAlt: "Person at a desk with a big screen",
    button: { text: "Learn more", href: "#process" },
  },
];

const SHRINK = 0.05;
const TILT = 8;
const PEEK = 14;

type CardProps = { item: StackedGlassItem; index: number; total: number; progress: MotionValue<number> };

const StackedCard = ({ item, index, total, progress }: CardProps) => {
  const reduce = useReducedMotion();
  const lastIndex = total - 1;
  const segment = 1 / Math.max(lastIndex, 1);
  const start = Math.min(index * segment, 0.999);
  const behind = lastIndex - index;
  const scale = useTransform(progress, [start, 1], [1, 1 - behind * SHRINK]);
  const rotateX = useTransform(progress, [start, Math.min(start + segment, 1)], [0, behind ? TILT : 0]);
  const dim = useTransform(progress, [start, 1], [0, Math.min(behind * 0.16, 0.5)]);
  const still = reduce || !behind;

  return (
    <li className="sticky [perspective:1600px]" style={{ top: `calc(clamp(4.5rem, 10svh, 7rem) + ${index * PEEK}px)` }}>
      <motion.article
        style={still ? undefined : { scale, rotateX }}
        className="kit-card relative grid w-full origin-top grid-cols-1 gap-4 p-4 will-change-transform lg:h-[min(72svh,38rem)] lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:p-6"
      >
        <div className="kit-card relative aspect-[16/10] overflow-hidden rounded-[var(--radius-image)] lg:aspect-auto lg:h-full">
          <Media src={item.imageSrc} alt={item.imageAlt ?? ""} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex min-w-0 flex-col justify-between gap-6 p-2 lg:p-4">
          <p aria-hidden="true" className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-balance text-[length:var(--text-h2)] font-medium leading-[1.1] tracking-[var(--heading-tracking)] text-foreground">{item.title}</h3>
            <p className="max-w-[28rem] text-pretty text-[length:var(--text-body)] leading-relaxed text-muted-foreground">{item.description}</p>
            {item.button && (
              <a href={item.button.href} className="btn-secondary mt-2 inline-flex h-11 items-center justify-center rounded-[var(--radius-button)] px-4 text-[length:var(--text-small)]">
                {item.button.text}
              </a>
            )}
          </div>
        </div>
        {!still && <motion.div aria-hidden="true" style={{ opacity: dim }} className="pointer-events-none absolute inset-0 rounded-[inherit] bg-black" />}
      </motion.article>
    </li>
  );
};

const FeaturesStackedGlass = ({
  tag = "What we do",
  title = "Three ways we take",
  titleMuted = "work off your plate.",
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: FeaturesStackedGlassProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 40, restDelta: 0.0005 });

  return (
    <section data-scene aria-label={ariaLabel ?? tag ?? title} className={cn("relative overflow-x-clip py-[var(--section-space)]", className)}>
      <div className="mx-auto w-[var(--container)]">
        <div className="flex flex-col gap-4">
          {tag && (
            <div className="flex items-center gap-2">
              <div aria-hidden="true" className="h-1.5 w-3 rounded-full bg-accent" />
              <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">{tag}</p>
            </div>
          )}
          <TwoToneSweepTitle title={title} muted={titleMuted} className="text-[length:var(--text-h1)] font-medium leading-[1.08] tracking-[var(--heading-tracking)]" />
        </div>
        <ul ref={listRef} className="mt-[clamp(2.5rem,4vw,4rem)] flex flex-col gap-[12svh]">
          {items.map((item, index) => (
            <StackedCard key={index} item={item} index={index} total={items.length} progress={progress} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesStackedGlass;
