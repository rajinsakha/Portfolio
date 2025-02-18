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
      { Icon: SiNextdotjs, name: "Next.js", color: "#fff" }, // Next.js color (black)
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, // TypeScript color
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, // Tailwind CSS color (sky blue)
    ],
  },
  {
    img: images.hajirkhata,
    title: "Hajir Khata",
    description:
      "Hajir Khata is a comprehensive software solution designed to simplify payroll management for businesses of all sizes. Its primary goal is to help organizations effortlessly track daily employee attendance and manage payroll with ease.",
    link: "https://hajirkhata.com",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" }, // React color (light blue)
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, // TypeScript color
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, // Tailwind CSS color
    ],
  },
  {
    img: images.shaasan2,
    title: "Shaasan 2",
    description:
      "Shaasan 2 is a comprehensive parliament management and record-keeping system designed to help both parliament members and citizens keep track of activities, discussions, and decisions made during parliamentary meetings.",
    link: "https://shaasan2.vercel.app/",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" }, // React color (light blue)
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, // TypeScript color
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, // Tailwind CSS color
    ],
  },
  {
    img: images.billingSystem,
    title: "Billing System",
    description:
      "The Billing System is a user-friendly web application that simplifies billing and record-keeping for businesses. It includes essential functionalities like inventory management, transaction tracking, and sales reporting. Additionally, it provides PDF generation for invoices, making billing and record-keeping efficient and straightforward.",
    link: "https://billings-system.vercel.app/",
    techStack: [
      { Icon: SiNextdotjs, name: "Next.js", color: "#fff" }, // Next.js color (black)
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" }, // TypeScript color
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" }, // Tailwind CSS color
    ],
  },
];
