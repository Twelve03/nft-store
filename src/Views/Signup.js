import { Link } from "react-router-dom";
import { AiOutlineGoogle, AiFillApple, AiOutlineTwitter } from "react-icons/ai";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-left justify-center ">
      <form className="mt-12 pb-2 h-full w-4/5 flex flex-col items-left ">
        <p className="text-3xl font-bold mb-10">Sign up</p>
        <p className="mb-4">Sign up with one of the following options.</p>
        <div className="mb-7 flex text-xl items-center justify-around">
          <div className="flex items-center justify-center cursor-pointer w-24 h-12 sm:w-32 border-black border-2 rounded-lg">
            <AiOutlineGoogle />
          </div>
          <div className="flex items-center justify-center cursor-pointer w-24 h-12 sm:w-32 border-black border-2 rounded-lg">
            <AiOutlineTwitter />
          </div>
          <div className="flex items-center justify-center cursor-pointer w-24 h-12 sm:w-32 border-black border-2 rounded-lg">
            <AiFillApple />
          </div>
        </div>
        <div className="flex flex-col">
          <label>
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="pl-4 mb-2 h-10 w-full rounded-lg"
            required
          />

          <label>
            <b>Email</b>
          </label>
          <input
            type="text"
            className="pl-4 mb-2 h-10 w-full rounded-lg"
            placeholder="Enter Email"
            required
          />

          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            className="pl-4 mb-2 h-10 w-full rounded-lg"
            placeholder="Enter Password"
            required
          />

          <label>
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            className="pl-4 mb-8 h-10 w-full rounded-lg"
            placeholder="Repeat Password"
            required
          />

          <button
            type="submit"
            className="mb-4 h-10 font-bold w-full rounded-lg border-black border-2"
          >
            Create Account
          </button>
        </div>
        <div className="flex justify-center">
          <p className="mr-2">Already have an account?</p>
          <Link to="/login">
            <span className="font-bold">Log in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
