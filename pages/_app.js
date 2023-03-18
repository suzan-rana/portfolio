import Layout from "../components/Layout";
import "../styles/globals.css";
import NProgress from "nprogress";
import { useEffect, useState } from "react";
import "nprogress/nprogress.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <div className={`${darkMode && "dark"} `}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </Layout>
    </div>
  );
}

export default MyApp;
// Navbar
// children
