import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { useTransition, animated } from "react-spring";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Animations
  const maskTransition = useTransition(showMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  const menuTransition = useTransition(showMenu, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <nav>
      {maskTransition(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="bg-black bg-opacity-60 fixed top-0 left-0 w-full h-full"
              onClick={() => setShowMenu(false)}
            ></animated.div>
          )
      )}

      {menuTransition(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed rounded-r-lg bg-white top-0 left-0 w-48 h-full z-50 shadow p-3"
              onClick={() => setShowMenu(false)}
            >
              <NavLinks closeMenu={() => setShowMenu(false)} />
            </animated.div>
          )
      )}

      <BiMenuAltLeft
        className="text-3xl z-10 w-10 cursor-pointer"
        style={{ color: "#1F51FF" }}
        onClick={() => setShowMenu(!showMenu)}
      />
    </nav>
  );
};

export default Nav;
