import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page-shell not-found">
        <h1>Project not found</h1>
        <Link to="/" className="text-link">
          Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-page page-shell">
      <nav className="simple-nav" aria-label="Project navigation">
        <Link to="/" className="text-link">
          Ivy Chen
        </Link>
      </nav>

      <section className="project-hero" aria-labelledby="project-title">
        <aside className="project-meta">
          <h1 id="project-title">{project.title}</h1>
          <ul aria-label={`${project.title} tools`}>
            {project.stack.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </aside>

        <div
          className={`project-media${
            project.images.length === 1 ? " project-media--single" : ""
          }`}
          aria-label={`${project.title} images`}
        >
          {project.images.map((image) => (
            <img
              key={image}
              src={image}
              alt={`${project.title} project screen`}
              className="project-media__image"
            />
          ))}
        </div>
      </section>

      <section className="project-copy">
        <p>{project.description}</p>
        {project.slug === "digital-scrapbook" && (
          <p>
            I am always filled with so many slips of physical artifacts of the
            places I have been to. Oftentimes, these artifacts hold travel
            memories or just indications of local places that I go to the most.
            So I thought, what if I create a digital scrapbook for myself where
            I can upload and crop images, place them on a digital scrapbook, and
            drag them around to simulate how I would with actual physical
            scrapbooking. There is an admin mode for myself with the editing
            toolbar and a visitor mode where users could just view and drag the
            artifacts around.
          </p>
        )}
        {project.slug === "running-planner" && (
          <p>
            This is a project I did for the capstone at AppWorks School in 2024
            over the course of 4 weeks. It is a lightweight planner for setting
            weekly mileage goals towards preparing for your races. User can set
            how many kilometers they want to do each week and how much they want
            to run on a particular day, and Strava data will be brought into to
            sync with the calendar. User can also see a culmulative monthly
            recap for their progress at a glance, as well as their most recent
            activities with the routes laid out. You can check out a 6-min demo
            of the project walkthrough{" "}
            <a
              href="https://youtu.be/EcveIdRHPcc?si=pqQmETVUKzbFuoRX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              here
            </a>
            .
          </p>
        )}
        {project.slug === "taiwan-night-market" && (
          <p>
            This was a project I did in 2022 with Taiwan Data Stories, an
            initiative started by 2 oversea Taiwanese looking to share more
            about Taiwanese culture and history through data storytelling. I was
            responsible for creating up to 10 different 3D visual assets of
            night market dishes.
          </p>
        )}
        {project.url && (
          <p>
            Try it here:{" "}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {project.urlLabel || project.url}
            </a>
          </p>
        )}
      </section>

      {project.galleryImages && (
        <section
          className="project-gallery"
          aria-label={`${project.title} gallery`}
        >
          {project.galleryImages.map((image) => (
            <figure className="project-gallery__item" key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </section>
      )}
    </main>
  );
}
