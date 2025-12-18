import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";
import Technologies from "@/components/technologies/Technologies";

const HomePage = () => {
  return (
    <div className="flex-1 p-2 font-bold text-4xl">
      <Hero />
      <Tagline />
      <Projects />
      <Technologies />
    </div>
  );
};

export default HomePage;
