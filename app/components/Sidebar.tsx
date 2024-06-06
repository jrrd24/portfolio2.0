"use client";
import Link from "next/link";
type Props = {};

function Sidebar({}: Props) {
  return (
    <nav className="sidebar w-[90vh] h-[60px] origin-bottom-right right-0 bottom-full flex fixed invisible lg:visible">
      <ul className="h-fit flex gap-6 rotate-180 font-semibold select-none [&_a]:hover:cursor-pointer">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
