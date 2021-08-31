import "../styles/globals.css";
import Header from "../components/Header";
import { wrapper } from "../styles/Wrapper.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={wrapper}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
