import Head from "next/head";
import Banner from "@/components/home/Banner";
import Header from "@/components/home/Header";
import Gallery from "@/components/home/Gallery";
import AboutUs from "@/components/home/AboutUs";
import OurService from "@/components/home/OurService";

export default function Home() {
  return (
    <>
      <Head>
        <title>aps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Gallery />
        <AboutUs />
        <OurService />
      </main>
    </>
  );
}
