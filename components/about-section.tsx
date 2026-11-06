import { ArrowUpRight } from "lucide-react"

const practiceNotes = [
  {
    number: "01",
    title: "Observar",
    description: "Escuchar el contexto y encontrar la pregunta que abre cada proyecto.",
  },
  {
    number: "02",
    title: "Explorar",
    description: "Probar materiales, referencias y caminos antes de elegir una forma.",
  },
  {
    number: "03",
    title: "Hacer",
    description: "Dar lugar al detalle, al oficio y a lo inesperado del proceso.",
  },
]

export function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 lg:py-32"
      aria-labelledby="about-title"
    >
      <div>
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
        <p className="mt-8 max-w-lg text-base leading-7 text-navy/75 sm:text-lg sm:leading-8">
          Soy Paula Romero: diseñadora gráfica, ceramista e ilustradora en
          Neuquén, Patagonia argentina. Me interesa el punto donde una idea se
          vuelve tangible: una identidad, una pieza de cerámica o una imagen.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-6 text-navy/65 sm:text-base sm:leading-7">
          Cada lenguaje propone sus propios tiempos y materiales. En todos busco
          trabajar con curiosidad, intención y atención al detalle.
        </p>
        <a
          href="#redes"
          className="mt-8 inline-flex min-h-11 items-center gap-3 border-b border-blue pb-2 text-sm font-medium text-navy transition-colors hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
        >
          Conectar conmigo
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>

      <div className="self-center border-t border-navy/15">
        {practiceNotes.map((note) => (
          <article
            key={note.number}
            className="grid grid-cols-[3rem_1fr] gap-4 border-b border-navy/15 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:py-8"
          >
            <span className="pt-1 font-mono text-[10px] tracking-[0.16em] text-blue">
              {note.number}
            </span>
            <div>
              <h3 className="font-serif text-3xl tracking-tight text-navy sm:text-4xl">
                {note.title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-navy/65 sm:text-base sm:leading-7">
                {note.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
