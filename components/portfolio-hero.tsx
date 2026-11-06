import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"

export function PortfolioHero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 sm:px-8 sm:pb-28 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-16 lg:px-12 lg:pb-32 lg:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col items-start">
        <p className="mb-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-navy/65 sm:text-xs">
          <span className="size-2 rounded-full bg-blue" aria-hidden="true" />
          Portfolio · Neuquén · Patagonia argentina
        </p>

        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-[clamp(4rem,8.4vw,7.9rem)] leading-[0.88] tracking-[-0.065em] text-navy"
        >
          Ideas que
          <br />
          toman <span className="font-serif italic text-blue">forma.</span>
        </h1>

        <p className="mt-8 max-w-md text-base leading-7 text-navy/70 sm:text-lg sm:leading-8">
          Diseñadora gráfica, ceramista e ilustradora. Trabajo desde Neuquén,
          Patagonia argentina.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#trabajo"
            className="inline-flex min-h-12 items-center gap-3 rounded-full bg-navy px-6 text-sm font-medium text-paper transition-colors hover:bg-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Explorar proyectos
            <ArrowDownRight aria-hidden="true" size={17} />
          </Link>
          <Link
            href="#sobre-mi"
            className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-navy transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
          >
            Conocerme
            <ArrowUpRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <div className="mt-14 hidden items-center gap-4 border-t border-navy/15 pt-5 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-navy/50">
            Práctica
          </span>
          <span className="h-px w-10 bg-blue/60" aria-hidden="true" />
          <span className="text-sm text-navy/80">Diseño · Cerámica · Ilustración</span>
        </div>
      </div>

      <figure className="relative mx-auto w-full max-w-xl lg:ml-auto lg:max-w-none">
        <div className="relative aspect-[0.92] overflow-hidden rounded-t-[46%] rounded-b-[1.8rem] bg-blue-pale sm:aspect-[1.04]">
          <Image
            src="/images/ceramica-azul.png"
            alt="Composición editorial de referencia con cerámica artesanal de esmalte azul."
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 44vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/5" aria-hidden="true" />
          <span className="absolute bottom-4 left-4 rounded-full border border-paper/65 bg-paper/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-navy/75 backdrop-blur-sm">
            Imagen editorial de referencia
          </span>
        </div>
        <figcaption className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.13em] text-navy/55">
          <span>Materiales, formas y pequeños hallazgos</span>
          <span aria-hidden="true">01 / 04</span>
        </figcaption>
        <span
          className="pointer-events-none absolute -right-4 top-10 -z-10 size-24 rounded-full border border-blue/25 sm:-right-8 sm:size-36"
          aria-hidden="true"
        />
      </figure>
    </section>
  )
}
