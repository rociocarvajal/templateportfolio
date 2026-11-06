"use client"

import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { useEffect, useRef } from "react"
import type { PortfolioProject } from "@/lib/portfolio"

type ProjectDetailDialogProps = {
  project: PortfolioProject | null
  onClose: () => void
}

export function ProjectDetailDialog({ project, onClose }: ProjectDetailDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) dialog.showModal()
    if (!project && dialog.open) dialog.close()
  }, [project])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      className="m-auto w-[min(54rem,calc(100%-2rem))] max-w-none overflow-hidden rounded-3xl border border-navy/10 bg-paper p-0 text-navy shadow-2xl shadow-navy/20 backdrop:bg-navy/65 backdrop:backdrop-blur-sm"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {project && (
        <div className="grid md:grid-cols-[1fr_0.88fr]">
          <div className="relative min-h-72 bg-blue-pale md:min-h-[34rem]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 768px) 90vw, 52vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-navy/75 backdrop-blur-sm">
              Imagen de referencia
            </span>
          </div>

          <div className="flex flex-col p-6 sm:p-9 md:p-10">
            <div className="flex items-start justify-between gap-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-blue">
                {project.category} · {project.year}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="-mr-2 -mt-2 inline-flex size-10 shrink-0 items-center justify-center rounded-full text-navy transition-colors hover:bg-blue-pale focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
                aria-label="Cerrar detalles del proyecto"
                autoFocus
              >
                <X aria-hidden="true" size={19} />
              </button>
            </div>

            <h2
              id="project-dialog-title"
              className="mt-10 font-serif text-4xl leading-[0.95] tracking-[-0.04em] sm:text-5xl"
            >
              {project.title}
            </h2>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-navy/55">
              {project.discipline}
            </p>
            <p
              id="project-dialog-description"
              className="mt-8 text-base leading-7 text-navy/75"
            >
              {project.description}
            </p>

            <div className="mt-auto border-t border-navy/12 pt-7">
              <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-navy/45">
                Ficha del proyecto
              </p>
              <div className="mt-4 flex items-center justify-between border-b border-navy/10 py-3 text-sm">
                <span className="text-navy/55">Disciplina</span>
                <span>{project.category}</span>
              </div>
              <div className="flex items-center justify-between py-3 text-sm">
                <span className="text-navy/55">Año</span>
                <span>{project.year}</span>
              </div>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-navy px-5 text-sm font-medium text-paper transition-colors hover:bg-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue"
              >
                Conocer más en redes
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
