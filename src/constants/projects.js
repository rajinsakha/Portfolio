import images from "./images";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

export const projects = [
  {
    img: images.shaasan,
    title: "Shaasan",
    description:
      "Shaasan is a dispute resolution platform connecting the public with local authorities. It features key functionalities such as report visualization, issues management, and user management. The platform aims to streamline communication between citizens and local government, making the resolution process more transparent and accessible.",
    link: "https://shaasan.vercel.app/",
    techStack: [
      { Icon: SiNextdotjs, name: "Next.js", color: "#fff" }, 
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, 
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },  
    ],
  },
  {
    img: images.hajirkhata,
    title: "Hajir Khata",
    description:
      "Hajir Khata is a comprehensive software solution designed to simplify payroll management for businesses of all sizes. Its primary goal is to help organizations effortlessly track daily employee attendance and manage payroll with ease.",
    link: "https://hajirkhata.com",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" }, 
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, 
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, 
    ],
  },
  {
    img: images.workspace,
    title: "WorkSpace Nepal",
    description:
      "Workspace Nepal is a platform where users can list rooms for rent and explore job opportunities across Nepal. It connects property owners with tenants and employers with job seekers, making it a convenient solution for both housing and employment needs.",
    link: "https://workspacenepal.vercel.app/",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" }, 
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, 
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, 
    ],
  },
  {
    img: images.billingSystem,
    title: "Billing System",
    description:
      "The Billing System is a user-friendly web application that simplifies billing and record-keeping for businesses. It includes essential functionalities like inventory management, invoice generator, transaction tracking, and sales reporting.",
    link: "https://billings-system.vercel.app/",
    techStack: [
      { Icon: SiNextdotjs, name: "Next.js", color: "#fff" }, 
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, 
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, 
    ],
  },
];
