import Hero from "@/components/hero/Hero";
import LetsConnect from "@/components/lets-connect/LetsConnect";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";
import Technologies from "@/components/technologies/Technologies";

const HomePage = () => {
  return (
    <div className="flex-1 p-2 font-bold text-4xl w-screen">
      <Hero />
      <Tagline />
      <Projects />
      <Technologies />
      <LetsConnect />
    </div>
  );
};

export default HomePage;
