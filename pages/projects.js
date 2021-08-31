import Head from "next/head";
import { highlight } from "../styles/Highlight.module.css";
import { heading } from "../styles/Heading.module.css";
import data from "../data/projects.json";
import ProjectSection from "../components/ProjectSection";

export default function Projects() {
  return (
    <>
      <Head>
        <title>projects | tomek-ch</title>
      </Head>
      <h1 className={heading}>
        Some of my personal <span className={highlight}>projects</span>:
      </h1>
      {data.map((project) => (
        <ProjectSection key={project.title} {...project} />
      ))}
    </>
  );
}
