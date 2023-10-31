import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Head from "next/head";
import Header from "@/components/common/header";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Suzan Rana - Full Stack Developer</title>
      </Head>
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <>{page}</>
    </Layout>
  )
}