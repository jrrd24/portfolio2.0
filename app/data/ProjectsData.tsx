import { BiLogoTypescript } from "react-icons/bi";
import { DiDotnet } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoVercel } from "react-icons/io5";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiCsharp,
  SiExpress,
  SiGooglegemini,
  SiMui,
  SiNextui,
  SiPrisma,
  SiShadcnui,
  SiSwiper,
  SiAxios,
  SiJsonwebtokens,
} from "react-icons/si";
import { TbFileTypeXml, TbLetterK } from "react-icons/tb";
const ProjectsData = [
  {
    id: 1,
    title: "Solutions Provider Company Website",
    employerDescription: "A project for ScaleUp Solutions Inc.",
    description: "A company website designed and developed during my internship with ScaleUp Solutions.",
    thumbnail: "/assets/projects/thumbnail/scaleup_thumbnail.png",
    link: undefined,
    order: 1,
    contrastColor: "#231F20",
    gradientColorDark: "bg-gradient-scaleup-dark",
    gradientColorLight: "bg-gradient-scaleup-light",
    tags: [
      { id: 1, name: "ASP.net", Icon: DiDotnet, order: 1 },
      { id: 2, name: "HTML", Icon: FaHtml5, order: 2 },
      { id: 3, name: "JavaScript", Icon: IoLogoJavascript, order: 3 },
      { id: 4, name: "CSS", Icon: FaCss3Alt, order: 4 },
      { id: 5, name: "Bootstrap 4.6", Icon: FaBootstrap, order: 5 },
      { id: 6, name: "Figma", Icon: FaFigma, order: 6 },
      { id: 7, name: "Swiper Js", Icon: SiSwiper, order: 7 },
    ],
    responsibilities: [
      {
        id: 1,
        name: "🎨 Helped Redesign the Website's UI/UX - Figma",
        order: 1,
      },
      {
        id: 2,
        name: "👷‍♂️ Front-End Developer - ASP.net",
        order: 2,
      },
      {
        id: 3,
        name: "🐛 System Testing and Debugging",
        order: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Kaya",
    employerDescription: undefined,
    description:
      "KAYA is your one-stop app for teachers and universities to connect with talent and empower professional growth!",
    thumbnail: "/assets/projects/thumbnail/kaya_thumbnail.png",
    link: undefined,
    order: 2,
    contrastColor: "#22C55E",
    gradientColorDark: "bg-gradient-kaya-dark",
    gradientColorLight: "bg-gradient-kaya-light",
    tags: [
      { id: 1, name: "NextJs", Icon: RiNextjsFill, order: 1 },
      { id: 2, name: "Gemini AI", Icon: SiGooglegemini, order: 2 },
      { id: 3, name: "Kinde", Icon: TbLetterK, order: 3 },
      { id: 4, name: "Prisma", Icon: SiPrisma, order: 4 },
      { id: 5, name: "Supabase", Icon: RiSupabaseFill, order: 5 },
      { id: 6, name: "NextUI", Icon: SiNextui, order: 6 },
      { id: 7, name: "shadcn/ui", Icon: SiShadcnui, order: 7 },
    ],
    responsibilities: [
      { id: 1, name: "👷‍♂️ Full-Stack Developer - NextJs", order: 1 },
      { id: 2, name: "⚙️ Database Designer - Prisma", order: 2 },
      { id: 3, name: "✨ Integration using NextJs API Routes", order: 3 },
      { id: 4, name: "🔐 Authentication thru Kinde", order: 4 },
    ],
  },
  {
    id: 4,
    title: "Lokal 360",
    employerDescription: undefined,
    description:
      "Lokal 360 is a web app designed to empower local businesses by connecting consumers with nearby businesses, fostering a sense of community and encouraging local commerce.",
    thumbnail: "/assets/projects/thumbnail/lokal360_thumbnail.png",
    link: undefined,
    order: 4,
    contrastColor: "#6D5FDF",
    gradientColorDark: "bg-gradient-lokal360-dark",
    gradientColorLight: "bg-gradient-lokal360-light",
    tags: [
      { id: 1, name: "ReactJs", Icon: FaReact, order: 1 },
      { id: 2, name: "NodeJs", Icon: FaNodeJs, order: 2 },
      { id: 3, name: "ExpressJs", Icon: SiExpress, order: 3 },
      { id: 4, name: "MySQL", Icon: GrMysql, order: 4 },
      { id: 5, name: "Material UI", Icon: SiMui, order: 5 },
      { id: 6, name: "Figma", Icon: FaFigma, order: 6 },
      { id: 7, name: "Axios", Icon: SiAxios, order: 7 },
      { id: 8, name: "JSON Web Tokens", Icon: SiJsonwebtokens, order: 8 },
    ],
    responsibilities: [
      {
        id: 1,
        name: "👷‍♂️ Full-Stack Developer - ReactJs, NodeJs, ExpressJs",
        order: 1,
      },
      { id: 2, name: "⚙️ Database Designer - MySQL", order: 2 },
      { id: 3, name: "🎨 Web Designer - Figma", order: 3 },
      { id: 4, name: "✨ Integration using REST APIs", order: 4 },
      { id: 5, name: "🔐 Authentication with JSON Web Tokens", order: 5 },
      { id: 6, name: "⭐ Project Lead", order: 6 },
    ],
  },
  {
    id: 5,
    title: "MTMC Mgmt System",
    employerDescription:
      "A Project for the Metro Tuguegarao Multi-Purpose Cooperative.",
    description:
      "A management system for the day-to-day tasks of the cooperative.",
    thumbnail: "/assets/projects/thumbnail/coop_thumbnail.png",
    link: undefined,
    order: 5,
    contrastColor: "#FFFFFF",
    gradientColorDark: "bg-gradient-mtmc-dark",
    gradientColorLight: "bg-gradient-mtmc-light",
    tags: [
      { id: 1, name: "C# (Windows Forms App)", Icon: SiCsharp, order: 1 },
      { id: 2, name: ".NET Framework", Icon: DiDotnet, order: 2 },
      { id: 3, name: "MySQL", Icon: GrMysql, order: 3 },
      { id: 4, name: "OpenXML", Icon: TbFileTypeXml, order: 4 },
    ],
    responsibilities: [
      { id: 1, name: "👷‍♂️ Full-Stack Developer - .NET Framework", order: 1 },
      { id: 2, name: "⚙️ Database Designer - MySQL", order: 2 },
      { id: 3, name: "📑 Handled Report Generation", order: 3 },
      { id: 4, name: "💬 Client Presentations", order: 4 },
      { id: 5, name: "⚒️ System Deployment", order: 5 },
    ],
  },
  {
    id: 6,
    title: "Portfolio 2.5",
    employerDescription: undefined,
    description:
      "My personal web portfolio. Built using NextJS 14 and Tailwind. Deployed using Vercel",
    thumbnail: "/assets/projects/thumbnail/portfolio2_thumbnail.png",
    link: "https://www.jerardpagalilauan.com/",
    order: 7,
    contrastColor: "#7D6188",
    gradientColorDark: "bg-gradient-portfolio2-dark",
    gradientColorLight: "bg-gradient-portfolio2-light",
    tags: [
      { id: 1, name: "NextJs", Icon: RiNextjsFill, order: 1 },
      { id: 2, name: "Tailwind", Icon: RiTailwindCssFill, order: 2 },
      { id: 3, name: "Vercel", Icon: IoLogoVercel, order: 4 },
      { id: 4, name: "Figma", Icon: FaFigma, order: 5 },
      { id: 5, name: "TypeScript", Icon: BiLogoTypescript, order: 3 },
      { id: 6, name: "shadcn/ui", Icon: SiShadcnui, order: 6 },
    ],
    responsibilities: [
      { id: 1, name: "👷‍♂️ Front-End Developer - NextJs", order: 1 },
      { id: 2, name: "🚀 Website Deployment via Vercel", order: 2 },
      { id: 3, name: "🎨 Web Designer - Figma", order: 3 },
    ],
  },
  {
    id: 8,
    title: "Charik Clone",
    employerDescription: undefined,
    description:
      "A remake / redesign of the Charik.fr website made during a technical interview.",
    thumbnail: "/assets/projects/thumbnail/charik_thumbnail.png",
    link: "https://charik-frontend-interview-jerard-pagalilauan.vercel.app/",
    order: 3,
    contrastColor: "#FF7C57",
    gradientColorDark: "bg-gradient-charik-dark",
    gradientColorLight: "bg-gradient-charik-light",
    tags: [
      { id: 1, name: "ReactJs", Icon: FaReact, order: 1 },
      { id: 2, name: "Tailwind", Icon: RiTailwindCssFill, order: 2 },
      { id: 3, name: "TypeScript", Icon: BiLogoTypescript, order: 3 },
      { id: 4, name: "Vercel", Icon: IoLogoVercel, order: 4 },
      { id: 5, name: "Swiper Js", Icon: SiSwiper, order: 5 },
    ],
    responsibilities: [
      {
        id: 1,
        name: "🎨 Recreated / Redesigned the Website",
        order: 1,
      },
      {
        id: 2,
        name: "👷‍♂️ Front-End Developer - React.JS",
        order: 2,
      },
      { id: 4, name: "🚀 Website Deployment via Vercel", order: 4 },
      {
        id: 3,
        name: "📱 Mobile-First Responsive Design",
        order: 3,
      },
    ],
  },
];
export default ProjectsData;
