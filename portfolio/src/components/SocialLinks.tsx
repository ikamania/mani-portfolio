import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const github = "https://github.com/ikamania" 
const linkedin = "https://www.linkedin.com/in/iraklimania/" 
const email = "maniaika07@gmail.com"

const SocialLinks = () => {
  return (
    <div className="mt-6 flex items-center gap-6 text-sm text-muted animate-fade-left">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-2
          transition-colors hover:text-accent
        "
      >
        <FaGithub
          size={17}
          className="transition-transform group-hover:-translate-y-0.5"
        />
        <span>GitHub</span>
        <span className="opacity-50 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </a>

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex items-center gap-2
          transition-colors hover:text-accent
        "
      >
        <FaLinkedin
          size={17}
          className="transition-transform group-hover:-translate-y-0.5"
        />
        <span>LinkedIn</span>
        <span className="opacity-50 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </a>

      <a
        href={`mailto:${email}`}
        className="
          group flex items-center gap-2
          transition-colors hover:text-accent
        "
      >
        <HiOutlineMail
          size={19}
          className="transition-transform group-hover:-translate-y-0.5"
        />
        <span>Email</span>
        <span className="opacity-50 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
