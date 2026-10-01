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

      <Section
        id="home"
      >
        <div
          className="
            flex w-full flex-1 flex-col items-center justify-center
            mb-[10rem]
          "
        >
          <Hero />
          <SocialLinks />
        </div>

        <ScrollArrow />
      </Section>

      <Section id="skills" className="justify-center">
        <Timeline />

        <div className="mb-8 w-full text-center animate-fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            What I work with
          </p>

          <p className="mx-auto mt-3 max-w-lg text-sm text-muted">
            Languages, tools, and technologies I use to build web applications
            and the systems behind them.
          </p>
        </div>

        <Skills />
        <Languages />
      </Section>

      <PageDots />
    </main>
  )
}

export default Home
