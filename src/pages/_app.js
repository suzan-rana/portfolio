import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import NProgress from "nprogress";
import { useEffect } from "react";
import "./Nprogress.css";
import { usePathname } from 'next/navigation'
import Cursor from "@/components/ui/Cursor/Cursor";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const pathName = usePathname()
  useEffect(() => {
    NProgress.start();
    new Promise((res) => setTimeout(res, 100)).then(() => {
      NProgress.done();   
    })
  }, [pathName ]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Suzan Rana is a software engineer from Nepal with expertise in web development with core technologies being React, NextJS, TailwindCSS and NodeJS."
        />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" sizes="any" />
        <meta property="og:site_name" content="Suzan Rana" />
        <meta property="og:locale" content="en-US" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </Head>
      <Cursor />
      {getLayout(<Component {...pageProps} />)}
      <Analytics />
    </>
  );
}
