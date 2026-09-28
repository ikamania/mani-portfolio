import { Link } from "react-router-dom"

import { House } from "lucide-react"

const name = "Irakli Mania"
const nameLetters = name.split("")
const about = "ABOUT"
const aboutLetters = about.split("")

const MAGNET_RADIUS = 10
const MAGNET_OFFSET = 15

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

function Home() {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion()) return

    const letters = e.currentTarget.querySelectorAll<HTMLElement>("[data-magnetic-letter]")

    const centers = Array.from(letters, (letter) => {
      const rect = letter.getBoundingClientRect()
      return rect.left + rect.width / 2
    })

    letters.forEach((letter, index) => {
      const distance = Math.abs(e.clientX - centers[index])
      const strength = Math.max(0, 1 - distance / MAGNET_RADIUS)

      letter.style.transform = `translateY(${-MAGNET_OFFSET * strength}px)`
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget
      .querySelectorAll<HTMLElement>("[data-magnetic-letter]")
      .forEach((letter) => {
        letter.style.transform = "translateY(0)"
      })
  }

  return (
    <main className="bg-background w-full min-h-dvh p-10 font-grotesk">
      <section className="flex justify-between">
        <div>
          <h1
            className="
              relative
              text-5xl font-thin
              text-background
              [-webkit-text-stroke:1px_var(--accent)]
            "
          >
            <span>
              {nameLetters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block whitespace-pre"
                >
                  {letter}
                </span>
              ))}
            </span>

            <span
              aria-hidden="true"
              className="
                absolute inset-0
                text-accent
                pointer-events-none
              "
            >
              {nameLetters.map((letter, index) => (
                <span
                  key={index}
                  className="inline-block whitespace-pre animate-fill-name fill-name-letter"
                  style={{
                    animationDelay: `${index * 60}ms`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          <p className="mt-3 max-w-md text-base text-muted animate-fade-left cursor-help">
            Backend-focused developer building web applications with Python,
            and modern frontend technologies.
          </p>
        </div>

        <div className="flex gap-5 items-center h-fit">
          <Link
            to="/about"
            className="text-lg text-accent animate-fade-right"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {aboutLetters.map((letter, index) => (
              <span
                key={index}
                data-magnetic-letter
                className="inline-block transition-transform duration-150"
              >
                {letter}
              </span>
            ))}
          </Link>
          <Link to="/" className="group text-accent animate-fade-right">
            <House
              size={20}
              strokeWidth={1.5}
              className="
                transition-transform duration-500 ease-out
                group-hover:rotate-180
              "
            />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
