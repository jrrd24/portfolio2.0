"use client";
import Link from "next/link";
type Props = {};

function Sidebar({}: Props) {
  return (
    <nav className="sidebar w-[90dvh] h-[60px] origin-bottom-right right-0 bottom-full flex fixed invisible lg:visible">
      <ul className="h-fit flex gap-6 rotate-180 font-semibold select-none [&_a]:hover:cursor-pointer">
        <li>
          <Link
            href="#home"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-flow hover:bg-[length:200%_auto] hover:animate-gradient transition-all duration-300 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-flow hover:bg-[length:200%_auto] hover:animate-gradient transition-all duration-300 "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-flow hover:bg-[length:200%_auto] hover:animate-gradient transition-all duration-300 "
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="hover:bg-clip-text hover:text-transparent hover:bg-gradient-flow hover:bg-[length:200%_auto] hover:animate-gradient transition-all duration-300 "
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
