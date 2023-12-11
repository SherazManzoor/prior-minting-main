// dynamically import
import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("../Components/Home/AboutUs/AboutUs"), {
  ssr: true,
});
const Community = dynamic(() => import("../Components/Home/Community"), {
  ssr: true,
});
const Faqs = dynamic(() => import("../Components/Home/Faq"), {
  ssr: true,
});
const Heroarea = dynamic(() => import("../Components/Home/Heroarea/Heroarea"), {
  ssr: true,
});
const OurWay = dynamic(() => import("../Components/Home/OurWay"), {
  ssr: true,
});
const Team = dynamic(() => import("../Components/Home/Team"), {
  ssr: true,
});
const TimelineSection = dynamic(
  () => import("../Components/Home/Timeline/Timeline"),
  {
    ssr: true,
  }
);

import Head from "next/head";

// import AboutUs from "../Components/Home/AboutUs/AboutUs";
// import Community from "../Components/Home/Community";
// import Faqs from "../Components/Home/Faq";
// import Heroarea from "../Components/Home/Heroarea/Heroarea";
// import OurWay from "../Components/Home/OurWay";
// import Team from "../Components/Home/Team";
// import TimelineSection from "../Components/Home/Timeline/Timeline";

import Layout from "../Components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Prior to mint</title>
      </Head>
      <section id="home">
        <Heroarea />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="roadmap">
        <TimelineSection />
      </section>
      <section>
        <Community />
      </section>
      <section id="team">
        <Team />
      </section>
      <section>
        <OurWay />
      </section>

      <section id="faq">
        <Faqs />
      </section>
    </Layout>
  );
}
