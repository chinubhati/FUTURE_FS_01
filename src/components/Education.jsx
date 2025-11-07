import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      school: "IEC College of Engineering and Technology, Greater Noida",
      year: "2022 – 2026",
      description:
        "Currently pursuing my B.Tech in Computer Science and Engineering with a maintained CGPA of 7+ and no backlogs till now. Focused on Full Stack Web Development, Data Structures & Algorithms, and modern software technologies.",
      icon: <GraduationCap className="w-6 h-6 text-blue-500" />,
    },
    {
      degree: "Senior Secondary (Class XII)",
      school: "Gyan International School, Greater Noida",
      year: "2020 – 2021",
      description:
        "Completed my Class 12th in Science stream with 81% overall. Developed strong fundamentals in Mathematics, Physics.",
      icon: <School className="w-6 h-6 text-purple-500" />,
    },
    {
      degree: "Secondary (Class X)",
      school: "Gyan International School, Greater Noida",
      year: "2019 – 2020",
      description:
        "Completed my Class 10th with 75% marks, building a strong academic base and a growing interest in futher upcoming studies.",
      icon: <BookOpen className="w-6 h-6 text-green-500" />,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600 dark:text-blue-400">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 backdrop-blur-md p-6"
            >
              <div className="flex items-center mb-3">
                {item.icon}
                <h3 className="text-2xl font-semibold ml-3 text-gray-800 dark:text-gray-100">
                  {item.degree}
                </h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                {item.school}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {item.year}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
