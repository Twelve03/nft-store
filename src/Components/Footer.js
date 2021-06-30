import {
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialFacebookCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between h-screen bg-gray-200 border-2">
      <img
        src="https://i.ibb.co/djPF91c/nfthis-logo.png"
        alt=""
        className="h-24 w-26 mt-12"
      />
      <div className="flex flex-col justify-around items-center font-bold -mt-6 w-2/4 h-1/4">
        <p>Home</p>
        <p>Explore</p>
        <p>Contact</p>
        <p>About</p>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Email Address"
          className="pl-2 w-48 h-8"
        />
        <button className="h-8 text-xs p-2 text-white bg-blue-500">
          SIGN UP
        </button>
      </div>
      <div className="flex flex-col w-full h-1/4 items-center justify-around border-t border-white">
        <div className="flex w-full items-center justify-around">
          <h1 className="font-medium">Follow us</h1>
          <TiSocialTwitter className="cursor-pointer text-2xl" />
          <TiSocialYoutube className="cursor-pointer text-2xl" />
          <TiSocialFacebookCircular className="cursor-pointer text-2xl" />
          <TiSocialInstagram className="cursor-pointer text-2xl" />
        </div>
        <p>© NFThis, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
