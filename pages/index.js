import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { useUserContext } from "../context/userContext";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import COMPONENT from "../components/COMPONENT";
import BottomPlayer from "../components/BottomPlayer";

export default function Home() {
  const { page, isMenu } = useUserContext();

  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <Head>
        <title>SaavnMusic - Search and play songs online</title>
        <meta
          name="title"
          content="SaavnMusic - Search and play songs online"
        />

        <meta
          name="description"
          content="Music player made with React, Next js, Tailwind Css and daisyUi"
        ></meta>

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          //  content= write here the deployed link
          
        />
        <meta
          property="og:title"
          content="SaavnMusic - Search and play songs online"
        />
        <meta
          property="og:description"
          content="Music player made with React, Next js, Tailwind Css and daisyUi"
        />
        <meta
          property="og:image"
          //  content= paste here the image of the app
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <COMPONENT />
      {page !== "playingnow" && <BottomPlayer />}
    </div>
  );
}
