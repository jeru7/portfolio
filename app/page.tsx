import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import Tagline from "@/components/tagline/Tagline";

const HomePage = () => {
  return (
    <div className="flex-1 p-2 font-bold text-4xl">
      <Hero />
      <Tagline />
      <Projects />
    </div>
  );
};

export default HomePage;
