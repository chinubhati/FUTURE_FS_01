import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "LuxeStay – Airbnb Clone",
      description:
        "A full-stack accommodation booking platform inspired by Airbnb, enabling users to explore, list, and manage stays with secure authentication and booking management.",
      tools: ["EJS", "Node.js", "Express.js", "MongoDB", "Bootstrap", "Password.js","cloudinary","multer"],
      image: "images/luxestay.png",
      github: "https://github.com/chinubhati/LuxeStay-major.git",
      live: "https://luxestay-major-1.onrender.com/listings",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio showcasing my projects, skills, and experience — built with React.js and Tailwind CSS, optimized for SEO and performance.",
      tools: ["React.js", "Tailwind CSS", "EmailJS", "Vercel"],
      image: "images/portfolio.png",
      github: "https://github.com/chinubha/portfolio",
      live: "https://chinubhati.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all backdrop-blur-md"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col justify-between h-[300px]">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
