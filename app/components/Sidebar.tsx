import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar flex fixed invisible lg:visible">
      <ul className="h-fit flex gap-6 rotate-180 font-semibold select-none [&_a]:hover:cursor-pointer">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
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
