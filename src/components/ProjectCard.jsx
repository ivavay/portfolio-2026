import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const image = project.gif || project.thumbnail;

  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <img
          src={image}
          alt={`${project.title} project preview`}
          className="project-card__image"
        />
        <div className="project-card__overlay" aria-hidden="true">
          <h2>{project.title}</h2>
          <span>{project.category}</span>
        </div>
      </Link>
    </article>
  );
}
