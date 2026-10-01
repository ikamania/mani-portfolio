const timeline = [
  {
    year: "2020",
    title: "Started Programming",
    description: "Started programming as a hobby.",
  },
  {
    year: "2025",
    title: "Skillwill College",
    description: "Studied Frontend development.",
    link: "https://skillwill.ge/",
  },
  {
    year: "2026",
    title: "Tbilisi State University",
    description: "Started studying computer science.",
    link: "https://www.tsu.ge/",
  },
]

const years = Array.from({ length: 7 }, (_, i) => String(2020 + i))

const Timeline = () => {
  return (
    <div className="mb-10 w-full">
      <div className="mb-6 text-center">
        <p className="lg:text-[10px] uppercase tracking-[0.25em] text-muted sm:tracking-[0.3em]">
          My Journey
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 right-0 top-1.5 border-t border-dashed border-border sm:top-2" />

        <div className="relative grid grid-cols-7">
          {years.map((year) => {
            const milestone = timeline.find((item) => item.year === year)

            return (
              <div key={year} className="relative min-w-0">
                <div
                  className={`relative z-10 mb-2 h-3 w-3 rounded-full border sm:mb-3 sm:h-4 sm:w-4 ${
                    milestone
                      ? "border-accent bg-background"
                      : "border-border bg-background"
                  }`}
                />

                <span
                  className={`text-[9px] sm:text-xs ${
                    milestone
                      ? "font-bold text-accent"
                      : "text-muted"
                  }`}
                >
                  {year}
                </span>

                {milestone && (
                  <div className="mt-1 pr-1 sm:mt-1.5 sm:pr-2">
                    {milestone.link ? (
                      <a
                        href={milestone.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium leading-tight text-text underline-offset-2 hover:text-accent hover:underline sm:text-sm"
                      >
                        {milestone.title}
                      </a>
                    ) : (
                      <h3 className="text-[10px] font-medium leading-tight text-text sm:text-sm">
                        {milestone.title}
                      </h3>
                    )}

                    <p className="mt-0.5 hidden text-xs text-muted sm:block">
                      {milestone.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline
