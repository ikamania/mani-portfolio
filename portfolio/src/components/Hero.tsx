import { MapPin } from "lucide-react"
import georgia from "../assets/georgia.svg"

const name = "Irakli Mania"
const nameLetters = name.split("")

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <h1
          className="
            relative text-4xl sm:text-5xl lg:text-6xl
            font-thin text-background [-webkit-text-stroke:1px_var(--accent)]
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

        <a href="https://share.google/aC5hqlHl7oCGnm1gO" target="_blank" className="
          absolute flex items-center gap-2 text-md top-1
          right-1 text-gray-500 font-bold animate-fade-right
          cursor-pointer group
        ">
          <MapPin size={16} className="text-red-500" />
          <span>Tbilisi, Georgia</span>

          <img
            src={georgia}
            alt=""
            className="
              pointer-events-none absolute w-60
              opacity-20
            "
          />
        </a>
      </div>

      <p className="indent-4 mt-3 max-w-lg text-lg text-muted animate-fade-left cursor-help">
        Backend-focused developer building web applications with Python,
        and modern frontend technologies.
      </p>
    </div>
  )
}

export default Hero
