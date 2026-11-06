import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { PortfolioProject } from "@/lib/portfolio"

type ProjectCardProps = {
  project: PortfolioProject
  onSelect: (project: PortfolioProject) => void
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <button
      type="button"
      className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue"
      aria-haspopup="dialog"
      aria-label={`Ver detalles de ${project.title}`}
      onClick={() => onSelect(project)}
    >
      <span className="relative mb-5 block aspect-[1.08] overflow-hidden rounded-2xl bg-blue-pale sm:aspect-[1.18]">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-navy/75 backdrop-blur-sm">
          Imagen de referencia
        </span>
        <span className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-paper text-navy transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
          <ArrowUpRight aria-hidden="true" size={18} />
        </span>
      </span>

      <span className="flex items-start justify-between gap-5">
        <span>
          <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-navy/55">
            {project.discipline} <span aria-hidden="true">·</span> {project.year}
          </span>
          <span className="block font-serif text-2xl tracking-tight text-navy transition-colors group-hover:text-blue sm:text-[1.75rem]">
            {project.title}
          </span>
        </span>
        <span className="mt-1 shrink-0 rounded-full border border-navy/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.11em] text-navy/60">
          {project.category}
        </span>
      </span>
    </button>
  )
}
