import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SKillSection from "../components/SkillSection";
import KnowMeSection from "../components/KnowMeSection";
import ContactSection from "../components/ContactSection";
import SidebarMenu from "../components/SidebarMenu";

export default function Home() {
  return (
    <>
      <Head>
        <title>AKR - Web Developer</title>
      </Head>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SKillSection />
      <KnowMeSection />
      <ContactSection />
      <SidebarMenu />
    </>
  );
}
