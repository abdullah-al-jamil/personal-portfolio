import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Terminal,
} from "lucide-react";

import { FaAws, FaCss3Alt, FaDocker, FaGithub, FaHtml5, FaJs, FaLaravel, FaLinkedin, FaLinkedinIn, FaLinux, FaPhp, FaTwitter, FaVuejs } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Students Taught", value: "1000+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Dhaka, Bangladesh" },
  { icon: Briefcase, text: "Open for freelance work" },
  { icon: GraduationCap, text: "CS Graduate from Southeast University" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "John Doe",
    profession: "Real Estate Agent",
    userImage: "/images/u1.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Mike Smith",
    profession: "Business Owner",
    userImage: "/images/u2.jpg",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Alex Johnson",
    profession: "Web developer",
    userImage: "/images/u3.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Emily Clark",
    profession: "Interior Designer",
    userImage: "/images/u4.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jamilahmed284@gmail.com",
    href: "mailto:jamilahmed284@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/abdullah-al-jamil", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/abdullah-al-jamil", label: "LinkedIn" },
  // { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Software Engineer",
    company: "Dotlines Technologies Ltd.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise SaaS products. Mentoring junior developers and implementing best practices.",
    technologies: ["C", "PHP", "Laravel", "Vue.js", "MySQL"],
  },
  // {
  //   type: "work",
  //   title: "Full-Stack Developer",
  //   company: "StartupXYZ",
  //   period: "2020 - 2022",
  //   description:
  //     "Built and maintained multiple web applications. Collaborated with design team to implement responsive UIs.",
  //   technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  // },
  // {
  //   type: "education",
  //   title: "Master of Computer Science",
  //   company: "Stanford University",
  //   period: "2018 - 2020",
  //   description:
  //     "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
  //   technologies: ["Research", "AI/ML", "Distributed Systems"],
  // },
  // {
  //   type: "work",
  //   title: "Junior Developer",
  //   company: "WebAgency Co.",
  //   period: "2018 - 2020",
  //   description:
  //     "Developed client websites and e-commerce platforms. Gained experience in agile methodologies.",
  //   technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  // },
  {
    type: "education",
    title: "Bachelor of Computer Science and Engineering",
    company: "Southeast University",
    period: "2016 - 2021",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Competitive Programming", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/abdullah-al-jamil", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/abdullah-al-jamil", label: "LinkedIn" },
  // { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:jamilahmed284@gmail.com", label: "Email" },
];

export const projects = [
  {
    title: "Barista Cafe",
    description:
      "A modern coffee shop website with features public menu, reservations, and a full admin dashboard with CRUD management for menu, team, reviews, and bookings.",
    image: "/images/barista-cafe.jpeg",
    techStack: ["Laravel", "Vue.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    demoUrl: "https://new-barista-cafe.netlify.app/",
    githubUrl: "https://github.com/abdullah-al-jamil/barista-cafe",
  },
  {
    title: "Life Drop Blood Donation",
    description:
      "A full-stack blood donation management system — donors register, book appointments, and request blood; admins manage inventory and donation centers.",
    image: "/images/life-drop-donation.png",
    techStack: ["Laravel", "Vue.js", "sqlite", "Tailwind CSS", "Docker"],
    demoUrl: "https://lifedropdonateblood.netlify.app/",
    githubUrl: "https://github.com/abdullah-al-jamil/blood-donation-laravel-vue",
  },
  {
    title: "Smart News Dashboard",
    description:
      "AI‑driven news dashboard using Laravel, NewsAPI, and Google Gemini. Features: summarization, chatbot, and categorized feed.",
    image: "/images/smart-news-dashboard.png",
    techStack: ["Laravel", "Google Gemini", "Alpine.js", "Tailwind CSS", "Docker"],
    demoUrl: "https://smart-news-dashboard.onrender.com/",
    githubUrl: "https://github.com/abdullah-al-jamil/smart-news-dashboard",
  },
  // {
  //   title: "Real Estate Platform",
  //   description:
  //     "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
  //   image: "/images/p4.jpg",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  // {
  //   title: "Fitness Tracker",
  //   description:
  //     "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
  //   image: "/images/p5.jpg",
  //   techStack: ["React Native", "Firebase", "Node.js", "Charts"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
  // {
  //   title: "Learning Management System",
  //   description:
  //     "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
  //   image: "/images/p6.jpg",
  //   techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: Palette },
      { name: "jQuery", icon: Code2 },
      { name: "Vue.js", icon: FaVuejs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C", icon: Cpu },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: FaDocker },
      { name: "AWS", icon: FaAws },
      { name: "Linux", icon: FaLinux },
      { name: "Redis", icon: Database },
      { name: "CI/CD", icon: Server },
    ],
  },
];
