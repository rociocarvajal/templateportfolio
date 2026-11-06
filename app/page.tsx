import { AboutSection } from "@/components/about-section"
import { PortfolioHero } from "@/components/portfolio-hero"
import { ProjectGrid } from "@/components/project-grid"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Page() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only z-50 rounded-full bg-navy px-5 py-3 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido-principal">
        <PortfolioHero />
        <ProjectGrid />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  )
}
