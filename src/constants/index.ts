import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  logo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "Database Design",
    icon: backend,
  },
  {
    title: "System Development",
    icon: creator,
  },
  {
    title: "Dashboard Development",
    icon: web,
  },
  {
    title: "Deployment & Maintenance",
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Lead Developer",
    companyName: "RESEATO (Capstone Project)",
    icon: logo, // Placeholder icon
    iconBg: "#383E56",
    date: "2025 - 2026",
    points: [
      "Architected and developed a comprehensive restaurant reservation and management system.",
      "Implemented vendor-side dashboards for real-time booking management and analytics.",
      "Integrated secure authentication and role-based access control using Supabase.",
      "Ensured high performance and scalability through optimized database schemas and efficient React components.",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "Anesrad Inn Management System",
    icon: logo, // Placeholder icon
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Designed and implemented a specialized hotel management system for room bookings and guest tracking.",
      "Developed an intuitive administrative interface for managing occupancy and generating reports.",
      "Streamlined the guest check-in/check-out process through a custom-built digital workflow.",
      "Maintained system reliability and data integrity for day-to-day operations.",
    ],
  },
  {
    title: "Co-Founder & Developer",
    companyName: "FURHUB (Startup Concept)",
    icon: logo, // Placeholder icon
    iconBg: "#383E56",
    date: "2025-2026",
    points: [
      "Conceptualized and built a pet grooming appointment system as a startup MVP.",
      "Developed a scheduling engine to handle multiple service providers and appointment slots.",
      "Focused on creating a seamless user experience for pet owners to book services easily.",
      "Explored business logic and scalability for a multi-tenant service platform.",
    ],
  },
  {
    title: "Mobile Developer",
    companyName: "Educational Modules (HENYO)",
    icon: logo, // Placeholder icon
    iconBg: "#E6DEDD",
    date: "2026",
    points: [
      "Developed a mobile-first practice and coaching system using Flutter.",
      "Implemented interactive quiz modules and educational content delivery mechanisms.",
      "Integrated offline-first capabilities to ensure students can study without constant internet access.",
      "Designed a gamified learning experience to increase student engagement and retention.",
    ],
  },
];

const testimonials: TTestimonial[] = [];

const projects: TProject[] = [
  {
    name: "RESEATO",
    description:
      "A high-end restaurant reservation system featuring a vendor-side dashboard, real-time booking, and a seamless customer experience built for modern dining establishments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Anesrad Inn",
    description:
      "A robust hotel management system designed to handle room bookings, guest records, and operational reporting for small to medium-sized inns.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "FURHUB",
    description:
      "A specialized appointment system for pet grooming services, focusing on scheduling efficiency and a user-friendly interface for pet owners.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Dental Clinic DB",
    description:
      "A database-centric appointment system for dental clinics that allows for easy booking without the need for a complex login process.",
    tags: [
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "sqlserver",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "HENYO",
    description:
      "A Flutter-based educational mobile app featuring practice modules, quizzes, and coaching systems to enhance student learning.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: mobile, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Smart Lighting",
    description:
      "An IoT project integrating Arduino with Firebase to create a remotely controlled smart lighting system with real-time status monitoring.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "iot",
        color: "pink-text-gradient",
      },
    ],
    image: web, // Placeholder image
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
