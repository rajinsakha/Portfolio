import images from "./images";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

export const projects = [
  {
    imgs: [images.hajirkhata],
    title: "Hajir Khata",
    description:
      "Hajir Khata is a comprehensive software solution designed to simplify payroll management for businesses of all sizes. Its primary goal is to help organizations effortlessly track daily employee attendance and manage payroll with ease.",
    link: "https://hajirkhata.com",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" },
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },
      { Icon: SiRedux, name: "Redux", color: "#764abc" },
    ],
  },
  {
    imgs: [images.workspace],
    title: "WorkSpace Nepal",
    description:
      "Workspace Nepal is a platform where users can list rooms for rent and explore job opportunities across Nepal. It connects property owners with tenants and employers with job seekers, making it a convenient solution for both housing and employment needs.",
    link: "https://workspacenepal.vercel.app/",
    techStack: [
      { Icon: SiReact, name: "React", color: "#61dafb" },
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },
      { Icon: SiRedux, name: "Redux", color: "#764abc" },
    ],
  },
  {
    imgs: [images.billingSystem, images.billing2, images.billing3],
    title: "Billing System",
    description:
      "The Billing System is a user-friendly web application that simplifies billing and record-keeping for businesses. It includes essential functionalities like inventory management, invoice generator, transaction tracking, and sales reporting.",
    link: "https://billings-system.vercel.app/",
    techStack: [
      { Icon: SiNextdotjs, name: "Next.js", color: "#fff" },
      { Icon: SiTypescript, name: "TypeScript", color: "#007acc" },
      { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38bdf8" },
      { Icon: SiRedux, name: "Redux", color: "#764abc" },
    ],
  },
];
