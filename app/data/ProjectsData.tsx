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
} from "react-icons/si";
import { TbFileTypeXml, TbLetterK } from "react-icons/tb";

const ProjectsData = [
  {
    id: 1,
    title: "ScaleUp Solutions",
    description:
      "The company website of ScaleUp Solutions Inc, A software services company that provides business solutions that scale up SME digitalization to improve quality of services.",
    logo: "/assets/projects/logo/scaleup_logo.png",
    thumbnail: "/assets/projects/thumbnail/scaleup_thumbnail.png",
    link: "https://www.scaleupsolutions.ph/",
    order: 4,
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
      { id: 1, name: "🎨 Web Designer", order: 1 },
      { id: 2, name: "👷‍♂️ Front-End Developer", order: 2 },
    ],
  },

  {
    id: 2,
    title: "Print To Scale",
    description:
      "The website of Print To Scale, formerly known as Horizon Printers, the company is a trusted name in the offset printing industry. ",
    logo: "/assets/projects/logo/printToScale_logo.png",
    thumbnail: "/assets/projects/thumbnail/printToScale_thumbnail.png",
    link: "https://www.printtoscale.ph/",
    order: 3,
    contrastColor: "#F6F6F6",
    gradientColorDark: "bg-gradient-printToScale-dark",
    gradientColorLight: "bg-gradient-printToScale-light",
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
      { id: 1, name: "🎨 Web Designer", order: 1 },
      { id: 2, name: "👷‍♂️ Front-End Developer", order: 2 },
    ],
  },

  {
    id: 3,
    title: "Kaya",
    description:
      "KAYA is your one-stop app for teachers and universities to connect with talent and empower professional growth!",
    logo: "/assets/projects/logo/kaya_logo.png",
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
      { id: 1, name: "👷‍♂️ Full-Stack Developer", order: 1 },
      { id: 2, name: "⚙️ Database Designer", order: 2 },
    ],
  },

  {
    id: 4,
    title: "Lokal 360",
    description:
      "Lokal 360 is a web app designed to empower local businesses by connecting consumers with nearby businesses, fostering a sense of community and encouraging local commerce.",
    logo: "/assets/projects/logo/lokal360_logo.png",
    thumbnail: "/assets/projects/thumbnail/lokal360_thumbnail.png",
    link: undefined,
    order: 5,
    contrastColor: "#6D5FDF",
    gradientColorDark: "bg-gradient-lokal360-dark",
    gradientColorLight: "bg-gradient-lokal360-light",
    tags: [
      { id: 1, name: "ReactJs", Icon: FaReact, order: 1 },
      { id: 2, name: "NodeJs", Icon: FaNodeJs, order: 2 },
      { id: 3, name: "ExpressJs", Icon: SiExpress, order: 3 },
      { id: 4, name: "MySQL", Icon: GrMysql, order: 4 },
      { id: 5, name: "Material UI", Icon: SiMui, order: 5 },
      { id: 5, name: "Figma", Icon: FaFigma, order: 5 },
    ],
    responsibilities: [
      { id: 1, name: "👷‍♂️ Full-Stack Developer", order: 1 },
      { id: 2, name: "⚙️ Database Designer", order: 2 },
      { id: 3, name: "🎨 Web Designer", order: 3 },
      { id: 4, name: "⭐ Project Lead", order: 4 },
    ],
  },

  {
    id: 5,
    title: "MTMC Management System",
    description:
      "A management system for the day-to-day tasks of the Metro Tuguegarao Multi-Purpose Cooperative.",
    logo: "/assets/projects/logo/coop_logo.png",
    thumbnail: "/assets/projects/thumbnail/coop_thumbnail.png",
    link: undefined,
    order: 6,
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
      { id: 1, name: "👷‍♂️ Full-Stack Developer", order: 1 },
      { id: 2, name: "⚙️ Database Designer", order: 2 },
      { id: 3, name: "📑 Handled Excel Report Generation", order: 3 },
      { id: 4, name: "💬 Client Presentations", order: 4 },
      { id: 5, name: "⚒️ System Deployment", order: 5 },
    ],
  },

  {
    id: 6,
    title: "Portfolio 2.0",
    description: "My personal web portfolio.",
    logo: "/assets/projects/logo/portfolio2_logo.png",
    thumbnail: "/assets/projects/thumbnail/portfolio2_thumbnail.png",
    link: "https://www.jerardpagalilauan.com/",
    order: 1,
    contrastColor: "#7D6188",
    gradientColorDark: "bg-gradient-portfolio2-dark",
    gradientColorLight: "bg-gradient-portfolio2-light",
    tags: [
      { id: 1, name: "NextJs", Icon: RiNextjsFill, order: 1 },
      { id: 2, name: "Tailwind", Icon: RiTailwindCssFill, order: 2 },
      { id: 3, name: "Vercel", Icon: IoLogoVercel, order: 4 },
      { id: 4, name: "Figma", Icon: FaFigma, order: 5 },
      { id: 5, name: "TypeScript", Icon: BiLogoTypescript, order: 3 },
    ],
    responsibilities: [
      { id: 1, name: "👷‍♂️ Front-End Developer", order: 1 },
      { id: 2, name: "🚀 Website Deployment", order: 2 },
      { id: 3, name: "🎨 Web Designer", order: 3 },
    ],
  },
];

export default ProjectsData;
