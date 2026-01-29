import React from "react";
import { motion } from "framer-motion";

import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* left side content */}
        <div className="md:w-1/2 mb-10 md-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            Hi,I'm <span className="text-amber-400">Ravi Rajesh Gaud</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
            👨‍💻Full Stack Developer{" "}
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            I’m a passionate Full Stack Developer pursuing my MCA, with hands-on
            experience in building modern, scalable web applications using the
            MERN stack (MongoDB, Express.js, React.js, Node.js). I develop
            responsive interfaces with React & Tailwind CSS, build secure
            backend APIs, manage databases with MongoDB and MySQL, and implement
            authentication using JWT, focusing on clean code and great user
            experiences.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Tech Stack: React.js, JavaScript, HTML, CSS, JAVA, Tailwind CSS, Node.js,
            Express.js, MongoDB, MySQL, REST APIs, JWT, Git, GitHub, Postman
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-amber-500 rounded-lg  font-medium hover:bg-amber-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-pink-500 rounded-lg font-medium hover:bg-amber-700/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* right side image  */}

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute insert-0 rounded-full bg-gradient-to-r from-amber-400 to-blue opacity-70 ">
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float"
                src={assets.profileImg}
                alt="profileImage"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
