import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Languages from "../components/Languages"
import ScrollArrow from "../components/ScrollArrow"
import PageDots from "../components/PageDots"
import SocialLinks from "../components/SocialLinks"
import Section from "../components/Section"

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

      <Section id="skills">
        <Skills />
        <Languages />
      </Section>

      <PageDots />
    </main>
  )
}

export default Home
