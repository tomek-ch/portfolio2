import LinkIcon from "./icons/LinkIcon";
import {
  project,
  links,
  imgWrapper,
  details,
  reverseBlock,
} from "../styles/Project.module.css";

const PostSection = ({
  title,
  description,
  link: { text, url },
  img,
  reverse,
}) => (
  <section className={`${project} ${reverse ? reverseBlock : ""}`}>
    <h2>{title}</h2>
    <div className={imgWrapper}>
      <img src={img} alt={title} />
    </div>
    <div>
      <p className={details}>{description}</p>
      <div className={links}>
        <a href={url}>
          <LinkIcon small /> {text}
        </a>
      </div>
    </div>
  </section>
);

export default PostSection;
