import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt, FaFigma, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss, SiMui, SiNextui, SiDaisyui } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

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
];
export default TechStackData;
