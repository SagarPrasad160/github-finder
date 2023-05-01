import React from "react";

import { FaGithub } from "react-icons/fa";

function NavBar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <a
        className="btn btn-ghost normal-case text-xl"
        href="https://github.com/"
      >
        Github Finder <FaGithub className="ml-2 text-3xl" />
      </a>
    </div>
  );
}

export default NavBar;
