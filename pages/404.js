import { notFound } from "../styles/NotFound.module.css";
import { highlight } from "../styles/Highlight.module.css";

const NotFound = () => (
  <div className={notFound}>
    <h1>
      <span className={highlight}>404</span>
    </h1>
    <p>Page not found</p>
  </div>
);

export default NotFound;
