import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about page-shell">
      <nav className="simple-nav" aria-label="Main navigation">
        <Link to="/" className="text-link">
          Ivy Chen
        </Link>
      </nav>

      <section className="about-content" aria-label="About Ivy Chen">
        <p>
          Ivy can be found tinkering with Codex most recently, along with
          traditional media like neocolor pastels, gouache, and embroidery
          threads during her time away from screens. Aside from making stuff,
          she plays a lot of tennis, rows, and trains with{" "}
          <a
            href="https://www.instagram.com/montreal.athletes.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            MAC run club
          </a>
          . She also writes on both{" "}
          <a
            href="https://ivychen.substack.com/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Substack
          </a>{" "}
          and{" "}
          <a
            href="https://dev.to/ivavay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Dev.to
          </a>
          .
        </p>

        <img
          src="/assets/bio-image.JPG"
          alt="Ivy Chen standing on mossy rocks by the ocean"
          className="about-photo"
        />
      </section>
    </main>
  );
}
