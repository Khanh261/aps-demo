import Head from "next/head";
import Hero from "@/components/home/Hero";
import Header from "@/components/home/Header";
import Gallery from "@/components/home/Gallery";
import AboutUs from "@/components/home/AboutUs";
import OurService from "@/components/home/OurService";
import Testimonial from "@/components/home/Testimonial";
import Album from "@/components/home/Album";
import Blog from "@/components/home/Blog";
import Footer from "@/components/home/Footer";
import Price from "@/components/home/Price";
import GalleryImage from "@/components/home/GalleryImage";
import Test from "@/components/home/test";
import ZoomParallax from "@/components/home/ZoomParallax";

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
        <Hero />
        {/* <Test /> */}
        <Album />
        <ZoomParallax />
        <OurService />
        <Price />
        {/* <GalleryImage /> */}
        {/* <Gallery /> */}
        <AboutUs />
        <Testimonial />
        <Blog />
        <Footer />
      </main>
    </>
  );
}
