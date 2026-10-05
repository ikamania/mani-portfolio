interface TechBadgeProps {
  language: string
}

function TechBadge({ language }: TechBadgeProps) {
  return (
    <span
      className="
        rounded-md border border-accent/30 px-2 py-1 text-xs text-accent
        transition-all duration-200 ease-out hover:-translate-y-1 hover:border-accent
    ">
      {language}
    </span>
  )
}

export default TechBadge
