import Home from "../pages/home/Home";
import Experience from "../pages/experience/Experience";
import Projects from "../pages/projects/Projects";
import Skills from "../pages/skills/Skills";
import ContactMe from "../pages/contact-me/ContactMe";

export default function Page() {
  return (
    <>
      <section id="home" className="py-10 scroll-mt-20">
        <Home />
      </section>
      <section id="experience" className="py-10 scroll-mt-20">
        <Experience />
      </section>
      <section id="projects" className="py-10 scroll-mt-20">
        <Projects />
      </section>
      <section id="skills" className="py-10 scroll-mt-20">
        <Skills />
      </section>
      <section id="contact-me" className="py-10 scroll-mt-20">
        <ContactMe />
      </section>
    </>
  );
}