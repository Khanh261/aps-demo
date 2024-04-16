import Head from "next/head";
import Banner from "@/components/home/Banner";
import Header from "@/components/home/Header";
import Gallery from "@/components/home/Gallery";
import AboutUs from "@/components/home/AboutUs";
import OurService from "@/components/home/OurService";
import Testimonial from "@/components/home/Testimonial";
import Album from "@/components/home/Album";
import Blog from "@/components/home/Blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>aps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Banner />
        <Album />
        <Gallery />
        <OurService />
        <Testimonial />
        <AboutUs />
        <Blog />
      </main>
    </>
  );
}
