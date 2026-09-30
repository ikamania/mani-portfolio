import { useState } from "react"

const languages = [
  {
    name: "Georgian",
    flag: "🇬🇪",
    level: "Native",
    description: "My mother tongue — comfortable with slang, idioms and accents.",
  },
  {
    name: "English",
    flag: "🇬🇧",
    level: "Fluent",
    description: "Working proficiency, used daily for docs, code and communication.",
  },
  {
    name: "Russian",
    flag: "🇷🇺",
    level: "Intermediate",
    description: "Grew up speaking it at home, still comfortable in everyday conversation.",
  },
]

const columns = languages.length

function Languages() {
  const [active, setActive] = useState(0)

  const { name, level, description } = languages[active]

  return (
    <section className="mt-3 sm:mt-10 flex w-full animate-fade-left flex-col items-center">
      <h1 className="mb-5 text-lg font-medium text-red-300">Spoken languages</h1>

      <div className="grid w-full grid-cols-3 place-items-center text-3xl">
        {languages.map((language, index) => (
          <button
            key={language.name}
            type="button"
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            aria-label={`${language.name} — ${language.level}`}
            className="cursor-pointer transition-transform duration-200 hover:scale-125 focus:scale-125 focus:outline-none"
          >
            {language.flag}
          </button>
        ))}
      </div>

      <div
        className="relative mt-4 grid w-full place-items-center rounded-lg border border-border bg-surface px-6 py-3 text-center"
        aria-live="polite"
      >
        <span
          className="absolute top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border-t border-l border-border bg-surface transition-all duration-200"
          style={{ left: `${((active + 0.5) / columns) * 100}%` }}
        />

        <p className="text-accent text-lg font-bold">
          {name}
          <span className="ml-2 text-sm font-normal text-red-400">{level}</span>
        </p>

        <p className="mt-1 text-muted">{description}</p>
      </div>
    </section>
  )
}

export default Languages
