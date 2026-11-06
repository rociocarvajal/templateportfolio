"use client"

import { useCallback, useMemo, useState } from "react"
import { ProjectDetailDialog } from "@/components/project-detail-dialog"
import { ProjectCard } from "@/components/project-card"
import { projectFilters, projects, type ProjectFilter, type PortfolioProject } from "@/lib/portfolio"
import { cn } from "@/lib/utils"

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("Todos")
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null)
  const closeProject = useCallback(() => setActiveProject(null), [])

  const visibleProjects = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  )

  return (
    <section
      id="trabajo"
      className="scroll-mt-24 border-t border-navy/12 bg-paper-deep/55"
      aria-labelledby="work-title"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-blue sm:text-xs">
              Una práctica, distintas materialidades
            </p>
            <h2
              id="work-title"
              className="font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-navy sm:text-7xl"
            >
              Trabajo <span className="italic text-blue">seleccionado.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-navy/65 sm:text-base sm:leading-7">
              Identidades, piezas y relatos visuales hechos entre la pantalla, el
              papel y el taller.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar proyectos por disciplina"
          >
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
                className={cn(
                  "min-h-10 rounded-full border px-4 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue",
                  filter === item
                    ? "border-navy bg-navy text-paper"
                    : "border-navy/20 bg-transparent text-navy/70 hover:border-navy/50 hover:text-navy",
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-navy/12 py-4 font-mono text-[9px] uppercase tracking-[0.15em] text-navy/50 sm:mt-16">
          <span>Selección de proyectos</span>
          <span aria-live="polite">
            {String(visibleProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-10">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      <ProjectDetailDialog project={activeProject} onClose={closeProject} />
    </section>
  )
}
