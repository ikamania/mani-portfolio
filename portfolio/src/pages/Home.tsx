import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { House, Moon, Sun } from "lucide-react"

const name = "Irakli Mania"
const nameLetters = name.split("")
const about = "ABOUT"
const aboutLetters = about.split("")

const MAGNET_RADIUS = 10
const MAGNET_OFFSET = 15

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

function Home() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

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
      <section className="flex flex-col">
        <div className="flex justify-center items-center gap-5 mb-10 mr-5">
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

          <Link to="/" className="text-accent animate-fade-right">
            <House
              size={20}
              strokeWidth={1.5}
              className="transition-transform hover:-translate-y-1"
            />
          </Link>

          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="absolute top-5 right-5 text-accent animate-fade-right cursor-pointer"
            aria-label="Toggle theme"
          >
            {dark ? (
              <Moon
                size={21}
                strokeWidth={1.5}
                className="transition-transform hover:scale-130"
              />
            ) : (
              <Sun
                size={21}
                strokeWidth={1.5}
                className="transition-transform hover:scale-130"
              />
            )}
          </button>
        </div>

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
                  className="inline-block whitespace-pre transition-transform hover:scale-130"
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
      </section>
    </main>
  )
}

export default Home
