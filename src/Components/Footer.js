import React from "react";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center h-screen bg-gray-200 border-2">
      <img
        src="https://placeholderlogo.com/img/placeholder-logo-1.png"
        alt=""
      />
      <div>
        <p>Home</p>
        <p>Explore</p>
        <p>Contact</p>
        <p>About</p>
      </div>
      <div className="flex">
        <h1>Subscribe</h1>
        <input type="text" />
        <button className="bg-blue-500">Submit</button>
      </div>
      <div className="flex flex-col w-3/4 items-center">
        <div className="flex w-full items-center justify-around">
          <h1>Follow us</h1>
          <TiSocialTwitter />
          <TiSocialYoutube />
          <TiSocialFacebookCircular />
          <TiSocialInstagram />
        </div>
        <p>Copyright mention here</p>
      </div>
    </footer>
  );
};

export default Footer;
