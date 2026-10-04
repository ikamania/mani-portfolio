interface NavigationProps {
  onPrevious: () => void
  onNext: () => void
  currentProject: number
  totaltProjects: number
}

function Navigation({ onPrevious, onNext, currentProject, totaltProjects }: NavigationProps) {
  return (
    <div
      className="
        flex justify-between px-5 text-accent font-medium
      "
    >
      <h1 className="cursor-pointer" onClick={onPrevious}>← Previous</h1>

      <span className="text-sm text-muted">
        {currentProject}/{totaltProjects}
      </span>

      <h1 className="cursor-pointer" onClick={onNext}>Next →</h1>
    </div>
  )
}

export default Navigation
