interface TechBadgeProps {
  language: string
}

function TechBadge({ language }: TechBadgeProps) {
  return (
    <span className="rounded-md border border-accent/30 px-2 py-1 text-xs text-accent">
      {language}
    </span>
  )
}

export default TechBadge
