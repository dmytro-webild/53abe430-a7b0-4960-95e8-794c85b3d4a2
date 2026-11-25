import { Outlet } from "react-router-dom";
import NavbarHairline from "@/components/navbars/NavbarHairline";
import FooterQuietColumns from "@/components/sections/footer/FooterQuietColumns";
import { Coffee } from "lucide-react";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="glass" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHairline
          brand="Fairview Coffee Shop"
          logoIcon={Coffee}
          navItems={[
            {
              name: "About",
              href: "#about"
            },
            {
              name: "Specialties",
              href: "#services"
            },
            {
              name: "Menu",
              href: "#product"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Visit Us",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="glass" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterQuietColumns
          brand="Fairview Coffee Shop"
          brandIcon={Coffee}
          description="Local family diner and bakery in Fairview, Michigan. Serving fresh homemade breakfast, lunch, and warm cinnamon rolls daily since 1989."
          columns={[
            {
              title: "Explore",
              items: [
                {
                  label: "Our Story",
                  href: "#about"
                },
                {
                  label: "Bakery & Kitchen",
                  href: "#services"
                },
                {
                  label: "Menu Favorites",
                  href: "#product"
                },
                {
                  label: "Guest Reviews",
                  href: "#testimonial"
                }
              ]
            },
            {
              title: "Visit & Contact",
              items: [
                {
                  label: "1520 N. Abbe Rd., Fairview, MI",
                  href: "https://maps.app.goo.gl/nmK7Xjgaoo6DoRMf9"
                },
                {
                  label: "Call 989-848-2959",
                  href: "tel:9898482959"
                },
                {
                  label: "Directions & Location",
                  href: "#contact"
                },
                {
                  label: "Common Questions",
                  href: "#faq"
                }
              ]
            },
            {
              title: "Hours",
              items: [
                {
                  label: "Mon-Sat: 6:00 AM - 3:00 PM",
                  href: "#contact"
                },
                {
                  label: "Sun: 7:00 AM - 2:00 PM",
                  href: "#contact"
                },
                {
                  label: "Phone Carryout Available",
                  href: "tel:9898482959"
                }
              ]
            }
          ]}
          copyright="© 2026 Fairview Coffee Shop. Proudly serving our community since 1989."
        />
      </footer>
    </div>
  );
}
