import { useMemo, useState } from "react"
import projectsData from "../data/projects.json"
import Navigation from "./projects/Navigation"
import PictureStack from "./projects/PictureStack"
import TechBadge from "./projects/TechBadge"

type Project = {
  title: string
  technologies: string[]
  link: string
  images: string
  learned: string[]
}

const projects: Project[] = projectsData

const projectImages = import.meta.glob(
  "../assets/projects/**/*.png",
  {
    // Import all matching images immediately and return their URL strings.
    // eager: true   → load/import images immediately
    // query: "?url" → get the image URL instead of the module
    // import: "default" → use the URL as the default export
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>

function Projects() {
  const [activeProject, setActiveProject] = useState(0)

  const project = projects[activeProject]

  const images = useMemo(
    () =>
      Object.entries(projectImages)
        .filter(([path]) => path.includes(`/projects/${project.images}`))
        .map(([, image]) => image),
    [project.images],
  )

  const isFirstProject = activeProject === 0
  const isLastProject = activeProject === projects.length - 1

  const handlePrevious = () => {
    if (!isFirstProject) {
      setActiveProject((current) => current - 1)
    }
  }

  const handleNext = () => {
    if (!isLastProject) {
      setActiveProject((current) => current + 1)
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mb-2 text-center text-xl font-medium text-muted sm:mb-4 sm:text-2xl">
        Things I've Built
      </h2>

      <div className="flex flex-1 flex-col justify-between px-4 py-3 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <div className="w-full">
            <h2 className="mb-1 text-lg font-medium text-accent sm:mb-2 sm:text-xl">
              {project.title}
            </h2>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <div className="contents sm:flex sm:flex-col sm:gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit group relative order-1 text-sm text-muted sm:order-none"
                >
                  View Source ↗

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-muted transition-all duration-300 group-hover:w-full" />
                </a>

                <div className="order-3 flex max-w-full sm:max-w-[15rem] flex-wrap gap-[.5rem] sm:order-none">
                  {project.technologies.map((technology) => (
                    <TechBadge
                      key={technology}
                      language={technology}
                    />
                  ))}
                </div>
              </div>

              <ul className="order-2 max-w-sm space-y-1 text-xs text-muted sm:order-none sm:text-sm">
                {project.learned.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <PictureStack
          key={project.images}
          images={images}
        />

        <Navigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          currentProject={activeProject + 1}
          totalProjects={projects.length}
        />
      </div>
    </div>
  )
}

export default Projects
