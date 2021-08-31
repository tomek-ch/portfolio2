import Link from "next/link";
import { header } from "../styles/Header.module.css";

const Header = () => (
  <header className={header}>
    <h1>
      <Link href="/">tomek-ch</Link>
    </h1>
    <nav>
      <Link href="/">home</Link>
      <Link href="/projects">projects</Link>
    </nav>
  </header>
);

export default Header;
