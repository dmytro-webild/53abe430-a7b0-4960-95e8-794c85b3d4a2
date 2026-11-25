import HeroBadgeCentered from "@/components/sections/hero/HeroBadgeCentered";
import AboutCompareLists from "@/components/sections/about/AboutCompareLists";
import FeaturesStackedGlass from "@/components/sections/features/FeaturesStackedGlass";
import GalleryGlassScroll from "@/components/sections/gallery/GalleryGlassScroll";
import TestimonialLogoCarousel from "@/components/sections/testimonial/TestimonialLogoCarousel";
import FaqCardGrid from "@/components/sections/faq/FaqCardGrid";
import ContactFormGlassPhoto from "@/components/sections/contact/ContactFormGlassPhoto";
import StrandField from "@/components/kit/StrandField";
import LoaderStrandRing from "@/components/loaders/LoaderStrandRing";
import { CakeSlice, Coffee, Cookie, Croissant, Egg, Heart, Sandwich, Utensils } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <StrandField

      />

      <LoaderStrandRing
        brand="Fairview Coffee Shop"
        introDelay={1.4}
      />

      <div id="hero" data-webild-section="HeroBadgeCentered" data-webild-section-id="HeroBadgeCentered-1" data-section="hero">
        <HeroBadgeCentered
          introDelay={1.4}
          badge={{
            label: "Local",
            text: "Serving Fairview families since 1989",
            href: "#about"
          }}
          title="Homemade breakfast and fresh baking in Fairview"
          description="Scratch-made cinnamon rolls, hot coffee, and classic diner plates served daily since 1989."
          primaryButton={{
            text: "See menu",
            href: "#product"
          }}
          secondaryButton={{
            text: "Visit us",
            href: "#contact"
          }}
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/wholesome-assorted-breakfast-meal_23-2147693613.jpg",
              imageAlt: "assorted breakfast meal"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/delicious-floral-feast-still-life_23-2149509046.jpg",
              imageAlt: "baked cinnamon rolls with orange"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-breakfast-table_23-2150247091.jpg",
              imageAlt: "breakfast in a skillet"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/closeup-beautiful-mini-tart-with-berries-cup-coffee_1262-20033.jpg",
              imageAlt: "mini tart with berries and coffee"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-breakfast-with-eggs-vegetables_23-2148454746.jpg",
              imageAlt: "breakfast with eggs and vegetables"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-cinnamon-rolls-concept_23-2148779663.jpg",
              imageAlt: "cinnamon rolls on cooling rack"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/cinnamon-raisin-roll_1339-8120.jpg",
              imageAlt: "cinnamon raisin rolls on plate"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/breakfast-table-nature-high-angle-view_176474-6543.jpg",
              imageAlt: "breakfast table outdoors"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutCompareLists" data-webild-section-id="AboutCompareLists-1" data-section="about">
        <AboutCompareLists
          tag="Since 1989"
          title="Generic diners use frozen mixes."
          titleMuted="We bake fresh from scratch daily."
          otherTitle="Chain Restaurants"
          otherItems={[
            "Pre-packaged frozen bakery goods and bread",
            "Pre-made instant coffee and automated service",
            "Heat-and-serve microwave breakfast platters",
            "Rushed atmosphere with impersonal seating",
            "Standardized commercial ingredients and pre-made dough"
          ]}
          brandName="Fairview Diner"
          brandIcon={Coffee}
          items={[
            "Cinnamon rolls baked fresh every morning",
            "Bottomless pots of warm brewed coffee",
            "Scratch-made breakfast skillets and fluffy pancakes",
            "Welcoming family tables and friendly local service",
            "Time-tested family diner recipes since 1989"
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesStackedGlass" data-webild-section-id="FeaturesStackedGlass-1" data-section="services" data-scene>
        <FeaturesStackedGlass
          tag="Our specialties"
          title="Scratch-made comfort food"
          titleMuted="prepared fresh daily"
          items={[
            {
              title: "Farm-fresh breakfasts",
              description: "Steak and eggs, signature scrambles, and classic pancakes cooked to order.",
              imageSrc: "https://img.b2bpic.net/free-photo/top-view-delicious-breakfast_23-2147991228.jpg",
              imageAlt: "Top view delicious breakfast",
              button: {
                text: "See full menu",
                href: "#product"
              }
            },
            {
              title: "Hearty lunches and pizzas",
              description: "Savory pies, burgers, and classic diner sandwiches baked in-house on golden crusts.",
              imageSrc: "https://img.b2bpic.net/free-photo/traditional-cinnamon-rolls-dough-preparation-homemade-sweet-rolls_127032-3166.jpg",
              imageAlt: "breakfast spread on checkered tablecloth",
              button: {
                text: "See full menu",
                href: "#product"
              }
            },
            {
              title: "Famous bakery treats",
              description: "Warm cinnamon rolls and sweet apple fritters prepared fresh every morning.",
              imageSrc: "https://img.b2bpic.net/free-photo/cinnamon-rolls-buns-wooden-table-with-copy-space-kanelbulle-swedish-dessert_123827-22507.jpg",
              imageAlt: "Cinnamon rolls buns on wooden table with copy space Kanelbulle Swedish dessert",
              button: {
                text: "See full menu",
                href: "#product"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-webild-section="GalleryGlassScroll" data-webild-section-id="GalleryGlassScroll-1" data-section="product" data-scene>
        <GalleryGlassScroll
          tag="Menu Favorites"
          title="Made fresh daily"
          titleMuted="for Fairview diners"
          items={[
            {
              icon: Egg,
              title: "Breakfast Classics",
              description: "Signature two-egg plates with meats and potatoes from $9.50",
              imageSrc: "https://img.b2bpic.net/free-photo/full-english-breakfast-with-fried-egg-bacon-sausages-beans_123827-37127.jpg",
              imageAlt: "Full English breakfast with fried egg bacon sausages and beans"
            },
            {
              icon: CakeSlice,
              title: "Homemade Pies",
              description: "Seasonal fruit filling by the slice from $4.50",
              imageSrc: "https://img.b2bpic.net/free-photo/slice-apple-strudel-plate_2829-11326.jpg",
              imageAlt: "Slice of an apple strudel on the plate"
            },
            {
              icon: Sandwich,
              title: "Gourmet Sandwiches",
              description: "Hearty lunch staples served with classic sides from $8.95",
              imageSrc: "https://img.b2bpic.net/free-photo/front-view-tasty-toast-sandwich-with-cheese-ham-along-with-red-tomatoes-bread-loafs-wooden-desk_140725-20945.jpg",
              imageAlt: "Front view tasty toast sandwich with cheese ham along with red tomatoes bread loafs on wooden desk"
            },
            {
              icon: Cookie,
              title: "Assorted Donuts",
              description: "Daily batch selection baked fresh each morning from $1.75",
              imageSrc: "https://img.b2bpic.net/free-photo/chocolate-doughnuts-buns-wooden-board_114579-17577.jpg",
              imageAlt: "Chocolate doughnuts and buns on a wooden board. "
            },
            {
              icon: Coffee,
              title: "Iced Coffee",
              description: "Refreshing cold house brews poured fresh from $3.25",
              imageSrc: "https://img.b2bpic.net/free-photo/aromatic-frappuccino-table_23-2148900676.jpg",
              imageAlt: "Aromatic frappuccino on table"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialLogoCarousel" data-webild-section-id="TestimonialLogoCarousel-1" data-section="testimonial">
        <TestimonialLogoCarousel
          tag="Our community"
          title="Loved by locals,"
          titleMuted="every morning."
          secondaryButton={{
            text: "Find our diner",
            href: "#contact"
          }}
          testimonials={[
            {
              quote: "The cinnamon rolls are easily the best in the area. Our family comes by every weekend.",
              name: "Callum Coleman",
              role: "Local resident",
              company: "Fairview Resident",
              icon: Croissant
            },
            {
              quote: "Real, honest diner plates. The steak and eggs hit the spot every single time.",
              name: "Grace Shaw",
              role: "Regular guest",
              company: "Morning Guest",
              icon: Coffee
            },
            {
              quote: "Warm people and great coffee. It feels like coming home when you step inside.",
              name: "Jordan Murphy",
              role: "Fairview local",
              company: "Coffee Lover",
              icon: Heart
            },
            {
              quote: "Terrific lunch specials. The pizza is surprisingly good for a classic coffee shop.",
              name: "Holly Hughes",
              role: "Frequent diner",
              company: "Daily Customer",
              icon: Utensils
            },
            {
              quote: "The apple fritters are massive and perfectly glazed. Always worth stopping by.",
              name: "Kevin Webb",
              role: "Town visitor",
              company: "Bakery Visitor",
              icon: Cookie
            }
          ]}
          labels={{
            previous: "Previous",
            next: "Next"
          }}
        />
      </div>

      <div id="faq" data-webild-section="FaqCardGrid" data-webild-section-id="FaqCardGrid-1" data-section="faq">
        <FaqCardGrid
          tag="Practical details"
          title="Good to know"
          titleMuted="for your visit"
          items={[
            {
              title: "Are you open for breakfast all day?",
              description: "Yes, we serve our full breakfast menu from open to close every day."
            },
            {
              title: "Can I order meals for carryout?",
              description: "Yes, call us at 989-848-2959 to place any menu item for pickup."
            },
            {
              title: "Do you serve large family groups?",
              description: "Always. We welcome kids and large family groups at our dining tables and booths."
            },
            {
              title: "Where are you located?",
              description: "We are located at 1520 N. Abbe Rd., Fairview, MI 48621."
            },
            {
              title: "What are your daily opening hours?",
              description: "We are open Monday through Saturday from 6:00 AM to 3:00 PM, and Sunday from 7:00 AM to 2:00 PM."
            },
            {
              title: "Do you bake your pastries fresh daily?",
              description: "Yes, our signature cinnamon rolls, pies, and breads are baked fresh in our kitchen every morning."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactFormGlassPhoto" data-webild-section-id="ContactFormGlassPhoto-1" data-section="contact">
        <ContactFormGlassPhoto
          title="Planning a visit or carryout?"
          titleMuted="Send us a message anytime."
          labels={{
            firstName: "First name",
            lastName: "Last name",
            email: "Email address",
            company: "Group or party",
            message: "Your message or catering question"
          }}
          placeholders={{
            firstName: "Callum",
            lastName: "Coleman",
            email: "info@fairviewcoffeeshop.com",
            company: "Family of 4",
            message: "Ask about daily baked goods or group visits."
          }}
          primaryButton={{
            text: "Send message"
          }}
          note="Call 989-848-2959 for direct phone orders during regular business hours."
          successText="Thank you. We will get back to you shortly."
          imageSrc="https://img.b2bpic.net/free-photo/cup-tea-with-bread-donuts-table_23-2147860558.jpg"
          imageAlt="Cup of tea with bread and donuts on table"
        />
      </div>
    </>
  );
}
