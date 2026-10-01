import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import ScrollArrow from "../components/ScrollArrow"
import PageDots from "../components/PageDots"
import SocialLinks from "../components/SocialLinks"
import Section from "../components/Section"
import Timeline from "../components/Timeline"

function Home() {
  return (
    <main className="w-full bg-background font-grotesk">
      <ThemeToggle />

      <Section id="home">
        <div
          className="
            mb-[10rem] flex w-full flex-1 flex-col
            items-center justify-center
          "
        >
          <Hero />
          <SocialLinks />
        </div>

        <ScrollArrow
          text="More about me"
          to="skills"
        />
      </Section>

      <Section
        id="skills"
        className="justify-center"
      >
        <Timeline />

        <div className="mb-8 w-full animate-fade-up text-center">
          <p className="uppercase tracking-[0.3em] text-muted">
            My tech stack
          </p>
        </div>

        <Skills />

        <ScrollArrow
          text="More"
          to="languages"
          className="
            absolute bottom-5 right-1/2
            translate-x-1/2 text-muted
          "
        />
      </Section>

      <Section
        id="languages"
        className="justify-center"
      >
        <Languages />

        <ScrollArrow
          text="Projects"
          to="projects"
          className="
            absolute bottom-5 right-1/2
            translate-x-1/2 text-muted
          "
        />
      </Section>

      <PageDots />
    </main>
  )
}

export default Home
