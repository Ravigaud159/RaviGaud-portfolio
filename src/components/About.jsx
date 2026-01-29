import React from "react";
import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      class="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* headings */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-amber-400">Me </span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background and passion
        </p>

        {/* image plus my journey */}

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* imag */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.profileImg}
              alt="profile"
            />
          </div>

          {/* text content  */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                During my MCA journey, I discovered my passion for full-stack
                web development. I began building real-world applications using
                modern technologies like React, Node.js, Express, and MongoDB.
                Instead of limiting myself to theory, I focused on practical
                learning by creating projects that solve real problems. One of
                my key milestones was developing a Doctor Appointment Booking
                System, a complete MERN stack application with authentication,
                dashboards, and real-time booking features. I also explored AI
                integration by building an AI Chatbot Web App, enhancing my
                frontend skills and understanding of APIs.
              </p>
              <p className="text-gray-300 mb-12">
                Along the way, I strengthened my skills through certifications,
                coding practice, and continuous experimentation. My efforts were
                recognized when I secured a Top 5 position in a product
                development competition, which further motivated me to push my
                limits. Today, I’m focused on growing as a Full Stack Developer,
                learning every day, and working toward building impactful,
                scalable applications that make a difference.
              </p>

              {/* cards  */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-amber-400 text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
