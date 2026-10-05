import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail, HiOutlineDownload } from "react-icons/hi"
import SocialLink from "./SocialLink"

const github = "https://github.com/ikamania"
const linkedin = "https://www.linkedin.com/in/iraklimania/"
const email = "maniaika07@gmail.com"

const SocialLinks = () => {
  return (
    <div className="mt-6 flex items-center gap-5 text-sm text-muted animate-fade-left">
      <SocialLink
        href={github}
        icon={<FaGithub size={19} />}
        label="GitHub"
        external
      />

      <SocialLink
        href={linkedin}
        icon={<FaLinkedin size={19} />}
        label="LinkedIn"
        external
      />

      <SocialLink
        href={`mailto:${email}`}
        icon={<HiOutlineMail size={21} />}
        label="Email"
      />

      <a
        href={`${import.meta.env.BASE_URL}resume.pdf`}
        download="Irakli-Mania-Resume.pdf"
        className="
          group flex items-center gap-2
          px-2 py-2 text-sm text-muted
        "
      >
        <HiOutlineDownload
          size={15}
          className="
            text-accent transition-transform duration-200 group-hover:-translate-y-0.5
            group-hover:text-muted
        "/>

        <span className="transition-colors duration-200 group-hover:text-accent">
          Download CV
        </span>
      </a>
    </div>
  )
}

export default SocialLinks
