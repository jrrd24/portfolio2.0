import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar w-[90vh] h-[60px] origin-bottom-right right-0 bottom-full flex fixed invisible lg:visible">
      <ul className="h-fit flex gap-6 rotate-180 font-semibold select-none [&_a]:hover:cursor-pointer">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Content</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
