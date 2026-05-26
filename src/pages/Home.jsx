import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

export default function Home() {
  return (
    <main className="home page-shell">
      <section className="intro" aria-label="Introduction">
        <p>
          <Link to="/about" className="text-link">
            Ivy Chen
          </Link>{" "}
          is a maker designing and building in ✂ Taipei, previously tinkering
          in SF Bay.
        </p>
      </section>

      <section className="project-grid" aria-label="Selected projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <footer className="site-footer" aria-label="Site footer">
        <span>✂ Taipei</span>
        <span>© Built by Ivy, 2026</span>
      </footer>
    </main>
  );
}
