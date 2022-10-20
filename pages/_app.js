import Layout from "../components/Layout";
import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`${darkMode && "dark" } `	}>
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
