import { TiHtml5 } from "react-icons/ti";
import {
  FaCss3Alt,
  FaFigma,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiTailwindcss,
  SiMui,
  SiNextui,
  SiDaisyui,
  SiExpress,
  SiSequelize,
  SiAxios,
  SiPrisma,
  SiPostman,
  SiCsharp,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { DiDotnet } from "react-icons/di";

const TechStackData = [
  {
    id: 1,
    Icon: TiHtml5,
    logo: "/assets/logos/html.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    order: 3,
    type: "frontend",
  },

  {
    id: 2,
    Icon: FaCss3Alt,
    logo: "/assets/logos/css.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    order: 4,
    type: "frontend",
  },

  {
    id: 3,
    Icon: IoLogoJavascript,
    logo: "/assets/logos/js.svg",
    link: "https://www.javascript.com/",
    order: 5,
    type: "frontend",
  },

  {
    id: 4,
    Icon: BiLogoTypescript,
    logo: "/assets/logos/ts.svg",
    link: "https://www.typescriptlang.org/",
    order: 6,
    type: "frontend",
  },

  {
    id: 5,
    Icon: SiTailwindcss,
    logo: "/assets/logos/tailwind.svg",
    link: "https://tailwindcss.com/",
    order: 7,
    type: "frontend",
  },

  {
    id: 6,
    Icon: SiMui,
    logo: "/assets/logos/mui.svg",
    link: "https://mui.com/",
    order: 8,
    type: "frontend",
  },

  {
    id: 7,
    Icon: SiNextui,
    logo: "/assets/logos/nextui.svg",
    link: "https://nextui.org/",
    order: 9,
    type: "frontend",
  },

  {
    id: 8,
    Icon: SiDaisyui,
    logo: "/assets/logos/daisyui.svg",
    link: "https://daisyui.com/",
    order: 10,
    type: "frontend",
  },

  {
    id: 9,
    Icon: FaFigma,
    logo: "/assets/logos/figma.svg",
    link: "https://www.figma.com/",
    order: 11,
    type: "frontend",
  },

  {
    id: 10,
    Icon: FaReact,
    logo: "/assets/logos/react.svg",
    link: "https://react.dev/",
    order: 1,
    type: "frontend",
  },

  {
    id: 11,
    Icon: RiNextjsFill,
    logo: "/assets/logos/nextjs.svg",
    link: "https://nextjs.org/",
    order: 2,
    type: "frontend",
  },

  {
    id: 12,
    Icon: FaNodeJs,
    logo: "/assets/logos/nodejs.svg",
    link: "https://nodejs.org/en",
    order: 1,
    type: "backend",
  },

  {
    id: 13,
    Icon: SiExpress,
    logo: "/assets/logos/expressjs.svg",
    link: "https://expressjs.com/",
    order: 2,
    type: "backend",
  },

  {
    id: 14,
    Icon: GrMysql,
    logo: "/assets/logos/mysql.svg",
    link: "https://www.mysql.com/",
    order: 4,
    type: "backend",
  },

  {
    id: 15,
    Icon: DiDotnet,
    logo: "/assets/logos/dotnet.svg",
    link: "https://dotnet.microsoft.com/en-us/download/dotnet-framework",
    order: 3,
    type: "backend",
  },

  {
    id: 16,
    Icon: SiSequelize,
    logo: "/assets/logos/sequelize.svg",
    link: "https://sequelize.org/",
    order: 7,
    type: "backend",
  },

  {
    id: 17,
    Icon: SiAxios,
    logo: "/assets/logos/axios.svg",
    link: "https://axios-http.com/",
    order: 6,
    type: "backend",
  },

  {
    id: 18,
    Icon: SiPrisma,
    logo: "/assets/logos/prisma.svg",
    link: "https://www.prisma.io/",
    order: 5,
    type: "backend",
  },

  {
    id: 19,
    Icon: FaGithub,
    logo: "/assets/logos/github.svg",
    link: "https://github.com/",
    order: 1,
    type: "other",
  },

  {
    id: 20,
    Icon: SiPostman,
    logo: "/assets/logos/postman.svg",
    link: "https://www.postman.com/",
    order: 3,
    type: "other",
  },

  {
    id: 21,
    Icon: SiCsharp,
    logo: "/assets/logos/csharp.svg",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    order: 4,
    type: "other",
  },

  {
    id: 22,
    Icon: SiVercel,
    logo: "/assets/logos/vercel.svg",
    link: "https://vercel.com/",
    order: 2,
    type: "other",
  },
];
export default TechStackData;
