import type { ReactNode } from "react"

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
}

const Section = ({ id, children, className = "" }: SectionProps) => {
  return (
    <section
      id={id}
      className={`
        relative mx-auto
        flex min-h-dvh w-full max-w-[50rem]
        flex-col
        px-5 py-8 sm:px-10
        ${className}
      `}
    >
      {children}
    </section>
  )
}

export default Section
