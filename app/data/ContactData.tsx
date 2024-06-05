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
    link: "https://www.facebook.com/Jrrdprz/",
    order: 3,
  },
  { id: 2, Icon: FaCommentSms, link: "tel:+639663672973", order: 2 },
  {
    id: 3,
    Icon: MdEmail,
    link: "mailto:jerardpagalilauan@gmail.com",
    order: 1,
  },
  {
    id: 4,
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/jerard-pagalilauan-1571142a8/",
    order: 4,
  },
  { id: 5, Icon: FaGithub, link: "https://github.com/jrrd24", order: 5 },
];

export default ContactData;
