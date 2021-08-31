import Link from "next/link";
import GitHubIcon from "./icons/GitHubIcon";
import LinkIcon from "./icons/LinkIcon";

const ProjectSection = ({ title, description, tech, img, code, live }) => (
  <section>
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div>
        <Link href={code}>
          <a>
            <GitHubIcon /> Code
          </a>
        </Link>
        <Link href={live}>
          <a>
            <LinkIcon /> Live
          </a>
        </Link>
      </div>
    </div>
    <img src={img} alt={`Screenshot of a ${title}`} />
  </section>
);

export default ProjectSection;
