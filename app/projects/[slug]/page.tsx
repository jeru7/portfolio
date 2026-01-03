"use client";

import ImageCarousel from "@/components/_ui/ImageCarousel";
import { projects } from "@/lib/projects";
import { useRouter, useParams } from "next/navigation";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();

  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p>Project not found</p>;
  }

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen w-full min-w-80 md:w-200 overflow-hidden flex justify-center mx-auto">
      <div className="p-2 pt-16 pb-8 flex flex-col gap-4 overflow-auto max-h-screen scrollbar-hidden">
        {/* back button */}
        <button
          onClick={handleBack}
          className="rounded-md py-1 px-3 border border-foreground w-fit h-fit hover:text-accent hover:border-accent hover:cursor-pointer transition-colors duration-200 "
        >
          <p className="text-sm">Back</p>
        </button>

        <div className="flex flex-col gap-4">
          {/* title */}
          <h1 className="text-2xl font-bold text-accent">{project.title}</h1>

          {/* project links */}
          <div className="flex gap-2">
            {project.link.repo.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="border px-3 py-1 rounded-full text-sm flex gap-1 items-center"
                target="_blank"
              >
                <link.icon className="w-4 h-4" />
                <p className="text-xs">{link.name}</p>
              </a>
            ))}
          </div>

          {/* images */}
          <ImageCarousel
            images={project.images}
            website={project.link.website}
            isMultiPlatform={false}
          />

          {/* technologies */}
          <ul className="flex gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <li key={index} className="border px-2 py-1 rounded-full text-xs">
                {tech}
              </li>
            ))}

            {project.technologies.length > 3 && (
              <li className="border px-2 py-1 rounded-full text-xs">
                +{project.technologies.length - 3}
              </li>
            )}
          </ul>

          {/* description */}
          <p className="">{project.description.long}</p>

          {/* key features */}
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">Key features</h3>
            <ul className="list-disc pl-4">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
