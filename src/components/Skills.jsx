import React from "react";
import { Code2, Layers, Wrench, Cloud, Database } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      skills: ["HTML5", "CSS3", "JavaScript", "Java", "React.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      skills: ["Node.js", "Express.js", "REST APIs", "Authorization & Authentication", "Mongoose"],
    },
    {
      title: "Databases & Cloud",
      icon: <Cloud className="w-6 h-6 text-indigo-500" />,
      skills: ["MongoDB", "SQL", "Render", "Vercel", "Netlify"],
    },
    {
      title: "Tools & Version Control",
      icon: <Wrench className="w-6 h-6 text-yellow-500" />,
      skills: ["Git & GitHub", "VS Code", "Postman", "Hoppscotch"],
    },
    {
      title: "Other Technical Skills",
      icon: <Layers className="w-6 h-6 text-green-500" />,
      skills: ["Responsive Design", "API Integration", "Deployment", "Problem Solving","MVC Architecture","Agile Methodologies"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">
          Technical Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl hover:scale-[1.02] transition-all backdrop-blur-md"
            >
              <div className="flex items-center mb-4 space-x-3">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
