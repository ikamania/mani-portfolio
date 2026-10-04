import Navigation from "./projects/Navigation"
import PhotoStack from "./projects/PictureStack"
import TechBadge from "./projects/TechBadge"

function Projects() {
  return (
    <div className="flex flex-1 flex-col">
      <h1 className="mb-4 text-center text-2xl font-medium text-muted">
        Things I've Built
      </h1>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div>
            <h2 className="mb-2 text-xl font-medium text-accent">
              E-Commerce Platform
            </h2>

            <a
              href="https://github.com/ikamania/e-store"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-sm text-muted"
            >
              View Source ↗

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-muted transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          <ul className="max-w-sm space-y-1 text-sm text-muted">
            <li>• Implemented user authentication and authorization</li>
            <li>• Designed and connected a PostgreSQL database</li>
            <li>• Built REST APIs with FastAPI</li>
            <li>• Learned how to structure a full-stack application</li>
          </ul>
        </div>

        <PhotoStack
          images={[
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
            "https://images.unsplash.com/photo-1556742111-a301076d9d18",
            "https://images.unsplash.com/photo-1556742212-5b211d5f2f4c",
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
          ]}
        />

        <div className="flex gap-[.5rem]">
          <TechBadge language="Python" />
          <TechBadge language="React" />
          <TechBadge language="Django" />
        </div>

        <div className="p-4">
          <Navigation
            onPrevious={() => {}}
            onNext={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
