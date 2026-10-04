interface NavigationProps {
  onPrevious: () => void
  onNext: () => void
  currentProject: number
  totalProjects: number
}

function Navigation({ onPrevious, onNext, currentProject, totalProjects }: NavigationProps) {
  return (
    <div
      className="
        flex justify-between px-5 text-accent font-medium
      "
    >
      <button
        type="button"
        onClick={onPrevious}
        className="cursor-pointer"
      >
        ← Previous
      </button>

      <span className="text-sm text-muted">
        {currentProject}/{totalProjects}
      </span>

      <button
        type="button"
        onClick={onNext}
        className="cursor-pointer"
      >
        Next →
      </button>
    </div>
  )
}

export default Navigation
