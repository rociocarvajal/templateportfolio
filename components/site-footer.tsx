import Link from "next/link"
import { ArrowUpRight, MoveUp } from "lucide-react"
import { socialLinks } from "@/lib/portfolio"

export function SiteFooter() {
  return (
    <footer id="redes" className="scroll-mt-24 bg-navy text-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="grid gap-12 border-b border-paper/20 pb-14 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8">
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-light">
              ¿Empezamos algo?
            </p>
            <h2 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-7xl">
              Las buenas ideas
              <br />
              empiezan <span className="italic text-blue-light">con un hola.</span>
            </h2>
          </div>
          <Link
            href="#trabajo"
            className="inline-flex min-h-12 w-fit items-center gap-3 rounded-full border border-paper/35 px-5 text-sm text-paper transition-colors hover:border-blue-light hover:bg-paper/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-light"
          >
            Volver a los proyectos
            <MoveUp aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-2xl">Paula Romero</p>
            <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.15em] text-paper/55">
              Diseño · Cerámica · Ilustración
            </p>
          </div>

          <nav aria-label="Redes sociales" className="flex flex-wrap gap-x-6 gap-y-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-paper/75 transition-colors hover:text-blue-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-light"
              >
                {social.label}
                <ArrowUpRight aria-hidden="true" size={13} />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-paper/20 pt-5 font-mono text-[9px] uppercase tracking-[0.12em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Neuquén · Patagonia argentina</span>
          <span>Portfolio · {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
