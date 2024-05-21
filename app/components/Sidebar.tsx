import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="sidebar flex fixed invisible lg:visible">
      <ul className="h-fit flex gap-8 rotate-180">
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Content</li>
      </ul>
    </div>
  );
}

export default Sidebar;
