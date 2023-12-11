import "../styles/reset.scss";
import "../styles/globals.scss";
import { useEffect, useState } from "react";
import Intro from "../Components/Intro/Intro";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return <div>{isLoading ? <Intro /> : <Component {...pageProps} />}</div>;
}

export default MyApp;
