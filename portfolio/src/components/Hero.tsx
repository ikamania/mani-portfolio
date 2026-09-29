const name = "Irakli Mania"
const nameLetters = name.split("")

const Hero = () => {
  return (
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
  )
}

export default Hero
