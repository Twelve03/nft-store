import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav>
      {showMenu && (
        <div
          className="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {showMenu && (
        <div className="fixed rounded-r-lg bg-white top-0 left-0 w-2/4 h-full z-50 shadow p-3">
          <NavLinks closeMenu={() => setShowMenu(false)} />
        </div>
      )}

      <BiMenuAltLeft
        className="text-2xl z-10 w-10"
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
};

export default Nav;
