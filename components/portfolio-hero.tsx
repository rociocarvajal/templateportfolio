import Image from "next/image";
import { withBasePath } from "@/constants/base-path"

export function PortfolioHero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12"
      aria-labelledby="hero-title"
    >
      {/* COLUMNA IZQUIERDA */}
      <div className="flex flex-col items-start">
        {/* MINI TÍTULO */}
        <p className="mb-8 inline-flex items-center gap-3 font-space-mono text-[10px] uppercase tracking-[0.22em] text-navy/65 sm:text-xs">
          <span className="h-px w-10 bg-navy/60" aria-hidden="true" />
          Diseñadora gráfica, ceramista e ilustradora.
        </p>
       
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-blue sm:text-xs">
          04 — Sobre mí
        </p>
        <h2
          id="about-title"
          className="max-w-lg font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-navy sm:text-7xl"
        >
          Un pie en la idea,
          <br />
          otro en la <span className="italic text-blue">materia.</span>
        </h2>

               <p className="mb-60 inline-flex items-center gap-3 font-space-mono text-[10px] uppercase tracking-[0.22em] text-navy/65 sm:text-xs">
          <span className="h-px w-10 bg-navy/60" aria-hidden="true" />
          Diseñadora gráfica, ceramista e ilustradora.
        </p>

        {/* SEGUNDA ILUSTRACIÓN */}
        <div className="relative mb-12 h-[220px] w-[75%]">
          {/* Agregaremos la imagen acá */}
        </div>
      </div>
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[420px] w-[min(60vw,720px)]"
        aria-hidden="true"
      >
        <Image
          src={withBasePath("/images/ilustracion.svg")}
          alt=""
          fill
          sizes="(max-width: 1024px) 60vw, 720px"
          className="object-contain object-right-bottom"
        />
      </div>

      {/* COLUMNA DERECHA */}
      <div className="relative flex min-h-[480px] items-end justify-end">
        {/* ILUSTRACIÓN DE LA MUJER */}
        <div className="relative z-10 h-[380px] w-full max-w-[420px]">
          <Image
            src={withBasePath("/images/ilustracion-mujer.svg")}
            alt="Ilustración de una mujer"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-contain object-right"
          />
        </div>
      </div>
    </section>
  );
}
