import { MapPin } from "lucide-react"
import georgia from "../assets/maps/georgia.svg"

const name = "Irakli Mania"
const nameLetters = name.split("")

const Hero = () => {
  return (
    <div className="w-full border-dashed border-accent p-4">
      <div className="relative">
        <h1
          className="
            relative text-3xl sm:text-5xl lg:text-6xl
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

        <a href="https://share.google/aC5hqlHl7oCGnm1gO" target="_blank" rel="noopener noreferrer" className="
          absolute flex items-center gap-2 text-sm -top-1
          -right-6 text-muted font-bold animate-fade-right
          cursor-pointer group
        ">
          <MapPin size={16} className="text-accent" />
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

      <p className="indent-4 mt-3 max-w-2xl text-lg text-muted animate-fade-left cursor-help">
        Backend-focused developer who builds web applications and the systems
        behind them.
      </p>
    </div>
  )
}

export default Hero
