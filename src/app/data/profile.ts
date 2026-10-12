import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export const profileLinks = [
  {
    label: "em882@cornell.edu",
    accessibleLabel: "Email Erik Mauricio",
    href: "mailto:em882@cornell.edu",
    icon: FaEnvelope,
    external: false,
  },
  {
    label: "(714) 600-7874",
    accessibleLabel: "Call Erik Mauricio",
    href: "tel:+17146007874",
    icon: FaPhone,
    external: false,
  },
  {
    label: "linkedin.com/in/erikmauricio",
    accessibleLabel: "Open Erik Mauricio on LinkedIn",
    href: "https://www.linkedin.com/in/erikmauricio/",
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "github.com/erik-mauricio",
    accessibleLabel: "Open Erik Mauricio on GitHub",
    href: "https://github.com/erik-mauricio",
    icon: FaGithub,
    external: true,
  },
];
