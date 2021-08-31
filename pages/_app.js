import "../styles/globals.css";
import Header from "../components/Header";
import { wrapper } from "../styles/Wrapper.module.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className={wrapper}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
