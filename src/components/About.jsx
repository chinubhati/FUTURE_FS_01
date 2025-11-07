import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-600 dark:text-blue-400">
          About Me
        </h2>

        <div className="bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Chinu Bhati</span>,
            a passionate and detail-oriented <span className="font-medium">Full Stack Web Developer</span> 
             &nbsp;currently pursuing my B.Tech in Computer Science and Engineering from Greater Noida.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I specialize in building scalable, modern, and responsive web applications using the 
            <span className="font-semibold"> MERN Stack (MongoDB, Express.js, React.js, and Node.js)</span>.
            Alongside web development, I have a strong foundation in 
            <span className="font-semibold text-blue-500 dark:text-blue-300"> Java programming</span> 
            &nbsp;and Data Structures & Algorithms (DSA), which helps me write optimized and efficient code.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            I enjoy solving algorithmic problems, understanding core computer science concepts, and applying them in real-world projects.
            My technical toolkit combines both <span className="font-semibold">frontend creativity</span> and <span className="font-semibold">backend logic</span> — allowing me to deliver complete, functional applications.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Based in <span className="font-semibold text-blue-500 dark:text-blue-300">Greater Noida, India</span>,
            I aspire to work with dynamic teams and contribute to impactful software products.
            My long-term goal is to grow as a <span className="font-medium">product-focused full stack developer</span> 
            &nbsp;who bridges the gap between clean code, design, and user experience.
          </p>

          <p className="text-lg leading-relaxed">
            Outside of coding, I enjoy exploring tech communities, contributing to open-source, and continuously learning about new frameworks and development trends.
          </p>
          <br />
          <div className="flex justify-center gap-4">

            <a
              href={`${process.env.PUBLIC_URL}/chinubhati_resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-500/40 transition duration-300"
            >
              👁️ View Resume
            </a>


            <a
              href={`${process.env.PUBLIC_URL}/chinubhati_resume.pdf`}
              download="chinubhati_resume.pdf"
              className="inline-block px-8 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 hover:shadow-green-500/40 transition duration-300"
            >
              📄 Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
