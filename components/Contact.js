import EnvelopeIcon from "./icons/EnvelopeIcon";
import GitHubIcon from "./icons/GitHubIcon";
import MediumIcon from "./icons/MediumIcon";
import UserIcon from "./icons/UserIcon";
import { heading } from "../styles/Heading.module.css";
import { highlight } from "../styles/Highlight.module.css";
import { contact, links } from "../styles/Contact.module.css";

const Contact = () => (
  <section className={contact}>
    <h2 className={heading}>
      <span className={highlight}>Find me</span> there:
    </h2>
    <div className={links}>
      <a href="https://tomek-ch.medium.com/">
        <MediumIcon small /> Medium
      </a>
      <a href="https://github.com/tomek-ch/">
        <GitHubIcon small /> GitHub
      </a>
      <a href="mailto:chmielnicki18@gmail.com">
        <EnvelopeIcon small /> Email
      </a>
    </div>
    <div>or...</div>
    <a href="/Tomasz_Chmielnicki_resume.pdf">
      <UserIcon small /> See my resume
    </a>
  </section>
);

export default Contact;
