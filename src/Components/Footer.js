// import { Link } from "react-router-dom";
import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-gray-200 border-2">
      <img
        src="https://i.ibb.co/djPF91c/nfthis-logo.png"
        alt=""
        className="h-24 w-26 mt-12"
      />
      <h1 className="font-medium mt-10">Follow us!</h1>
      <form
        className="mt-10 flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Sign up successfull");
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          className="pl-2 w-48 h-8 focus:shadow-blue"
          maxLength="30"
          required
        />
        <input
          type="submit"
          className="h-8 text-xs p-2 text-white bg-blue-500"
          value="Sign Up!"
        ></input>
      </form>
      <div className="mt-16 flex w-full items-center justify-around">
        <TiSocialTwitter className="cursor-pointer text-2xl" />
        <TiSocialYoutube className="cursor-pointer text-2xl" />
        <TiSocialFacebookCircular className="cursor-pointer text-2xl" />
        <TiSocialInstagram className="cursor-pointer text-2xl" />
      </div>

      <div className="mt-16 flex flex-col w-full h-24 items-center justify-around border-t border-white">
        <p>© NFThis, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
