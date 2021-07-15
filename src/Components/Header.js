import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed z-50 top-0 w-full bg-white bg-opacity-10 p-3 flex justify-between items-center h-12">
      <Nav />

      <Link to="/">
        <img
          src="https://i.ibb.co/w7Bc5w7/Group-1.png"
          alt="logo"
          className="h-10 w-10"
        />
      </Link>
    </header>
  );
};

export default Header;
