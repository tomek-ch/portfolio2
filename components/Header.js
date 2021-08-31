import Link from "next/link";
import { header, activeLink } from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <header className={header}>
      <h1>
        <Link href="/">tomek-ch</Link>
      </h1>
      <nav>
        <Link href="/">
          <a className={router.asPath === "/" ? activeLink : ""}>home</a>
        </Link>
        <Link href="/projects">
          <a className={router.asPath === "/projects" ? activeLink : ""}>
            projects
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
