import Link from "next/link";
import GitHubIcon from "./icons/GitHubIcon";
import LinkIcon from "./icons/LinkIcon";
import { project, links } from "../styles/Project.module.css";

const ProjectSection = ({ title, description, tech, img, code, live }) => (
  <section className={project}>
    <div>
      <h2>{title}</h2>
      <img src={img} alt={`Screenshot of a ${title}`} />
      <p>{description}</p>
      <ul>
        {tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className={links}>
        <Link href={code}>
          <a>
            <GitHubIcon small /> Code
          </a>
        </Link>
        <Link href={live}>
          <a>
            <LinkIcon small /> Live
          </a>
        </Link>
      </div>
    </div>
  </section>
);

export default ProjectSection;
