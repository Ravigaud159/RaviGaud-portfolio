import {
  FaHtml5,
  FaCss3Alt,
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/Ravi1.jpeg";
import projectImg1 from "../assets/AIchatBot.png";
import projectImg2 from "../assets/Doctors.png";
import projectImg3 from "../assets/TASKMANGER.png";
import projectImg4 from "../assets/image.png";
import projectImg5 from "../assets/tourism.png";
import projectImg6 from "../assets/Digi.png";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description: "Shaping the future through unique, tech-driven ideas.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description: "Turning ideas into beautifully designed, practical outcomes.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable, readable, and efficient code",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Java", "RESTful APIs"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications with modern tools.",
    tags: ["Java", "Flutter"],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description: "Deploying and managing applications in cloud environments.",
    tags: ["Docker", "CI/CD"],
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: [
      "Git & GitHub",
      "Webpack",
      ,
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Router",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      " JAVA",
      "Wordpress",
      "C#",
      ".Net",

      // Backend
      "Node.js",
      "Express",
      "RESTful APIs",
      "JWT",

      // Databases
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
];

export const projects = [
  {
    title: "AI-Powered Interactive Chatbot",
    description:
      "A fully responsive, interactive chatbot built with modern web technologies and powered by Google’s Gemini AI. Users can ask questions and receive real-time AI responses, while enjoying a fun and engaging experience with features like emoji support, image uploads, typing animations, and smooth UI interactions.",
    image: projectImg1,
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Google Gemini AI",
    "Emoji Support (EmojiMart)",
    ],
    icons: [
      FaHtml5, // HTML5
      FaCss3Alt, // CSS3
      
    ],
    demo: "https://github.com/Ravigaud159/AICHATBOT",
    code: "https://github.com/Ravigaud159/AICHATBOT.git",
  },
  {
    title: "Online Doctor Appointment Booking System",
    description:
      "A fully responsive web platform that allows users to filter doctors by specialty and book appointments seamlessly. Features include admin and doctor dashboards for managing profiles, schedules, and appointments, with secure backend integration using Node.js, Express.js, MongoDB, and JWT authentication.",
    image: projectImg2,
    tech: [
    "React.js",
    "Tailwind CSS",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "JWT Authentication",
    "Git",
    "GitHub",
    "Postman",
  ],
     icons: [
    FaReact,     // React.js
    FaTools,     // Tailwind CSS / JavaScript
    FaCode,      // JavaScript
    FaNodeJs,    // Node.js
    FaServer,    // Express.js / REST APIs
    FaDatabase,  // MongoDB
    FaServer,    // REST APIs    // JWT Authentication
    FaTools,     // Git
    FaTools,     // GitHub
    FaTools,     // Postman
  ],
    demo: "https://github.com/Ravigaud159/OnlineDoctorAppointment",
    code: "https://github.com/Ravigaud159/OnlineDoctorAppointment.git",
  },
  {
    title: "Task Manager Dashboard Web App",
    description:
      "A scalable full-stack web application built with React.js, TailwindCSS, and Node.js/Express. Users can register, login, and manage tasks through a responsive dashboard, with search & filter functionality and secure JWT-based authentication.",
    image: projectImg3,
    tech: [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB Atlas",
    "JWT Authentication",
    "bcrypt",
  ],
   icons: [
    FaReact,     // React.js
    FaCss3Alt,   // Tailwind CSS
    FaNodeJs,    // Node.js
    FaServer,    // Express.js
    FaDatabase,  // MongoDB Atlas    // JWT Authentication
    FaTools,     // bcrypt / security
  ],

    demo: "https://github.com/Ravigaud159/Task-Manager-Dashboard-Web-App",
    code: "https://github.com/Ravigaud159/Task-Manager-Dashboard-Web-App.git",
  },
  {
    title: "Student Information System",
    description:
      "A web-based application developed using C# and the .NET Framework with ASP.NET Web Forms, designed to securely manage and store student records. The system integrates SQL Server for persistent data storage and features a clean, modular UI enhanced through Master Pages and AWT components.",
    image: projectImg4,
     tech: [
    "C#",
    "ASP.NET Web Forms",
    "AWT",
    "Master Pages",
    "SQL Server",
    "Visual Studio",
    ".NET Framework",
  ],
    icons: [
    FaCode,       // C# / coding
    FaServer,     // ASP.NET backend
     // Web Forms / frontend UI
    FaDatabase,   // SQL Server
    FaTools,      // Visual Studio / Development Tools
      // Authentication / Security
        // Master Pages / modular UI elements
  ],
    demo: "https://github.com/Ravigaud159/-Student-Information-System",
    code: "https://github.com/Ravigaud159/-Student-Information-System.git",
  },
  {
    title: "Tourism Management System",
    description:
      "The Tourism Management System is a frontend-focused web application developed as part of my bridge course project. It simulates a tourism portal where users can log in, explore tour and hotel packages, and view or submit reviews. The project emphasizes clean UI design, usability, and core frontend concepts using vanilla web technologies. It demonstrates how a real-world tourism platform can be structured and made interactive without backend integration.",
    image: projectImg5,
    tech: ["HTML", "CSS", "JavaScript"],
     icons: [FaHtml5, FaCss3Alt],

    demo: "https://github.com/Ravigaud159/-Tourism-Management-System",
    code: "https://github.com/Ravigaud159/-Tourism-Management-System.git",
  },
  {
    title: "Digital Clock Web App",
    description:
  "A simple and stylish digital clock built using HTML, CSS, and JavaScript. It displays the current time in hours, minutes, and seconds with real-time updates every second, featuring a modern glassmorphism-inspired UI with blur and gradient effects.",  
    image: projectImg6,
    tech: ["HTML", "CSS", "JavaScript"],
icons: [FaHtml5, FaCss3Alt],
    demo: "https://github.com/Ravigaud159/DigitalClock",
    code: "https://github.com/Ravigaud159/DigitalClock.git",
  },
];

export const workData = [
  {
    role: "Full Stack Developer (Academic Projects)",
    company: "MCA Program Projects",
    duration: "2025 – Present",
    description:
      "Developed full-stack applications using the MERN stack (MongoDB, Express, React, Node.js). Created projects such as a Doctor Appointment Booking System and Tourism Management System. Designed REST APIs, handled database operations, and integrated frontend with backend services. Gained hands-on experience in authentication, role-based access, and CRUD operations.",
    color: "purple",
  },
  {
    role: "Frontend Developer (Academic Projects)",
    company: "College Projects & Self-Learning",
    duration: "2024",
    description:
      "Designed and developed multiple frontend web applications as part of academic coursework and personal learning. Built responsive and user-friendly interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS. Implemented features like authentication UI, dashboards, form validation, and API integration in project-based learning. Focused on clean UI, component reusability, and performance optimization. Collaborated with classmates on group projects, following basic Git/GitHub workflows.",
    color: "pink",
  },

];
