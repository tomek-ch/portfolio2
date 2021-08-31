import Image from "next/image";
import { container, heading } from "../styles/HelloSection.module.css";

const HelloSection = () => (
  <section>
    <h1 className={heading}>
      Hi, I'm Tomasz Chmielnicki.
      <br />
      I'm a web developer.
    </h1>
    <div className={container}>
      <p>
        I'm passionate about creating great software - anything from intuitive
        user interfaces and well-organized APIs to neat utilities that get stuff
        done.
      </p>
      <img src="/me.jpeg" alt="me" />
    </div>
  </section>
);

export default HelloSection;
