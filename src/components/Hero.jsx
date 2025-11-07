import React from 'react';

export default function Hero(){
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center relative text-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/images/chinu.jpg"
          alt="Chinu Bhati"
          className="w-40 h-40 rounded-full mb-6 shadow-lg object-cover border-4 border-blue-500"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-blue-400">Chinu Bhati</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
          Full Stack Developer | MERN Enthusiast. Building responsive and production-ready web apps.
        </p>
        <a href="#projects" className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View Projects
        </a>
      </div>
    </section>
  );
}
