import {
  FaCommentSms,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactData = [
  {
    id: 1,
    Icon: FaFacebook,
    name: "Facebook",
    link: "https://www.facebook.com/Jrrdprz/",
    order: 3,
  },
  {
    id: 2,
    Icon: FaCommentSms,
    name: "Phone",
    link: "tel:+639663672973",
    order: 2,
  },
  {
    id: 3,
    Icon: MdEmail,
    name: "Email",
    link: "mailto:jerardpagalilauan@gmail.com",
    order: 1,
  },
  {
    id: 4,
    Icon: FaLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jerard-pagalilauan-1571142a8/",
    order: 4,
  },
  {
    id: 5,
    Icon: FaGithub,
    name: "Github",
    link: "https://github.com/jrrd24",
    order: 5,
  },
];

export default ContactData;
