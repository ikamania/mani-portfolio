import type { ReactNode } from "react"

interface SocialLinkProps {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}

function SocialLink({
  href,
  icon,
  label,
  external = false,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="
        group flex items-center gap-2
        transition-colors hover:text-accent
      "
    >
      <span className="transition-transform group-hover:-translate-y-0.5">
        {icon}
      </span>

      <span className="hidden sm:inline">
        {label}
      </span>

      {external && (
        <span className="hidden opacity-50 transition-opacity group-hover:opacity-100 sm:inline">
          ↗
        </span>
      )}
    </a>
  )
}

export default SocialLink
