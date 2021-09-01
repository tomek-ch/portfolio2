import Head from "next/head";
import HelloSection from "../components/HelloSection";
import { heading } from "../styles/Heading.module.css";
import { highlight } from "../styles/Highlight.module.css";
import data from "../data/posts.json";
import PostSection from "../components/PostSection";

export default function Home() {
  return (
    <main>
      <Head>
        <title>home | tomek-ch</title>
      </Head>
      <HelloSection />
      <h2 className={heading}>
        Latest <span className={highlight}>post</span>
      </h2>
      <PostSection {...data.post} />
      <h2 className={heading}>
        Featured <span className={highlight}>project</span>
      </h2>
      <PostSection {...data.project} reverse />
    </main>
  );
}
