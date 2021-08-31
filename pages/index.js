import Head from "next/head";
import HelloSection from "../components/HelloSection";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <Head>
        <title>home | tomek-ch</title>
      </Head>
      <HelloSection />
    </main>
  );
}
