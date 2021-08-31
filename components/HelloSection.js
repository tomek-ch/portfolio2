import EnvelopeIcon from "../public/icons/EnvelopeIcon";
import GitHubIcon from "../public/icons/GitHubIcon";
import MediumIcon from "../public/icons/MediumIcon";
import {
  container,
  heading,
  links,
  highlight,
} from "../styles/HelloSection.module.css";

const HelloSection = () => (
  <section>
    <h1 className={heading}>
      Hi, I'm Tomasz Chmielnicki.
      <br />
      I'm a <span className={highlight}>web developer</span>.
    </h1>
    <div className={container}>
      <div>
        <p>
          I'm passionate about creating great software - anything from intuitive
          user interfaces and well-organized APIs to neat utilities that get
          stuff done.
        </p>
        <div className={links}>
          <a href="https://tomek-ch.medium.com/">
            <MediumIcon />
          </a>
          <a href="https://github.com/tomek-ch/">
            <GitHubIcon />
          </a>
          <a href="mailto:chmielnicki18@gmail.com">
            <EnvelopeIcon />
          </a>
        </div>
      </div>
      <img src="/images/me.jpeg" alt="me" />
    </div>
  </section>
);

export default HelloSection;
