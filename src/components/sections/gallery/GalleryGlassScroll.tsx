import { ListChecks, SquareKanban, CalendarCheck, LineChart, UserPlus, type LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import HorizontalScrollSection from "@/components/animation/HorizontalScrollSection";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import TwoToneSweepTitle from "@/components/kit/TwoToneSweepTitle";
import Media from "@/components/kit/Media";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type UseCase = { icon?: LucideIcon; title: string; description?: string; imageSrc: string; imageAlt?: string };

type GalleryGlassScrollProps = {
  tag?: string;
  title?: string;
  titleMuted?: string;
  description?: string;
  items?: UseCase[];
  ariaLabel?: string;
  className?: string;
};

const DEFAULT_ITEMS: UseCase[] = [
  {
    icon: ListChecks,
    title: "Clear ownership",
    description: "Every task has an owner and a status, so nothing falls between people.",
    imageSrc: "https://images.pexels.com/photos/18999381/pexels-photo-18999381.jpeg?auto=compress&w=1200",
    imageAlt: "Team standing around a table in a bright office",
  },
  {
    icon: SquareKanban,
    title: "One shared board",
    description: "See what is waiting, what is moving and what is finished at a glance.",
    imageSrc: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&w=1200",
    imageAlt: "Person working at a desk with several screens",
  },
  {
    icon: CalendarCheck,
    title: "Steady progress",
    description: "Each step is logged with a time, so anyone can see where things stand.",
    imageSrc: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&w=1200",
    imageAlt: "Desk with two monitors in a dark room",
  },
  {
    icon: LineChart,
    title: "Weekly overview",
    description: "The numbers that matter arrive on their own, no spreadsheet.",
    imageSrc: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=1200",
    imageAlt: "Code projected across a person in a dark room",
  },
  {
    icon: UserPlus,
    title: "Easy onboarding",
    description: "Accounts, access and first-week tasks ready before day one.",
    imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-2.webp",
    imageAlt: "Woman working on a laptop at a garden table",
  },
];

const GalleryGlassScroll = ({
  tag = "Use cases",
  title = "One system.",
  titleMuted = "Every team it touches.",
  description,
  items = DEFAULT_ITEMS,
  ariaLabel,
  className,
}: GalleryGlassScrollProps) => {
  const header = (
    <div className="mx-auto flex w-[var(--container)] flex-col gap-4">
      {tag && (
        <div className="flex items-center gap-2">
          <div aria-hidden="true" className="h-1.5 w-3 rounded-full bg-accent" />
          <p className="text-[length:var(--text-label)] uppercase tracking-[var(--label-tracking)] text-accent">{tag}</p>
        </div>
      )}
      <TwoToneSweepTitle title={title} muted={titleMuted} className="text-[length:var(--text-h1)] font-medium leading-[1.08] tracking-[var(--heading-tracking)]" />
      {description && <p className="max-w-[34rem] text-balance text-[length:var(--text-body-lg)] text-muted-foreground">{description}</p>}
    </div>
  );

  return (
    <section data-scene aria-label={ariaLabel ?? tag ?? title} className={cn("relative overflow-x-clip", className)}>
      <HorizontalScrollSection compact progress={false} header={header} headerClassName="max-w-none px-0" trackClassName="gap-4 px-[max(var(--gutter),calc((100vw-var(--max-w))/2))] md:gap-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <AppearOnScroll key={i} variant="fade" delay={(i % 4) * 0.08}>
              <article className="kit-card flex w-[85vw] flex-col gap-4 p-6 lg:w-[min(46rem,62vw)] lg:flex-row lg:items-stretch lg:gap-6">
                <div className="flex flex-col gap-4 lg:w-[38%] lg:shrink-0">
                  {Icon && (
                    <div className="kit-card flex size-10 items-center justify-center rounded-[0.625rem]">
                      <Icon aria-hidden="true" strokeWidth={1.5} className="size-4 text-accent" />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 lg:mt-auto">
                    <h3 className="text-balance text-[length:var(--text-h3)] font-medium leading-tight text-foreground">{item.title}</h3>
                    {item.description && <p className="text-balance text-[length:var(--text-body)] leading-relaxed text-muted-foreground">{item.description}</p>}
                  </div>
                </div>
                <div className="relative aspect-[4/3] min-w-0 flex-1 overflow-hidden rounded-[var(--radius)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--foreground)_6%,transparent)] lg:aspect-auto lg:min-h-[17rem]">
                  <Media src={item.imageSrc} alt={item.imageAlt ?? ""} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </article>
            </AppearOnScroll>
          );
        })}
      </HorizontalScrollSection>
    </section>
  );
};

export default GalleryGlassScroll;
