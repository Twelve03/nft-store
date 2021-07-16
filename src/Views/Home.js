import { useRef } from "react";
import { Link } from "react-router-dom";
import FeaturedNfts from "../Components/HomeComponents/FeaturedNfts";
import LiveAuctions from "../Components/HomeComponents/LiveAuctions";
import FeaturedSellers from "../Components/HomeComponents/FeaturedSellers";
import Explore from "../Components/HomeComponents/Explore";

const Home = () => {
  const exploreRef = useRef(null);
  const executeScroll = () => exploreRef.current.scrollIntoView();

  return (
    <div>
      {/* Landing Page */}
      <div className="p-2 flex justify-between sm:justify-around flex-col items-left h-screen w-full bg-black bg-cover bg-center">
        <img
          src="https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711&dl=1"
          alt=""
          className="h-2/4 pt-10 w-full md:self-center md:w-3/4"
        />
        <p className="text-gray-400 pl-6 -mb-7">NFT Marketplace</p>
        <h1 className="font-delagothicone text-white pl-6 text-3xl">
          NFThis
          <br />━ For those with creative minds.
        </h1>
        <button
          onClick={executeScroll}
          className="mb-7 ml-6 w-32 sm:w-1/4 md:w-1/6 h-12 bg-transparent text-gray-200 font-bold border rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Explore
        </button>
      </div>

      {/* Top NFT */}
      <div className="p-3 flex flex-col items-center">
        <Link to={"/nft/17"}>
          <div
            style={{
              backgroundImage: 'url("https://i.imgur.com/5rrOZOJ.gif")',
            }}
            className="relative bg-cover bg-center mt-20 w-72 h-32 rounded-lg shadow-lg"
          >
            <p className="p-3 font-delagothicone text-white text-sm">
              Top NFT of the week!
            </p>
            <button
              style={{ backgroundColor: "#1F51FF" }}
              className="absolute bottom-2 right-2 text-xs h-5 w-12 text-white font-bold rounded-full"
            >
              Buy
            </button>
          </div>
        </Link>

        <h1 className="font-delagothicone mt-16 mb-3 text-2xl w-full">
          Featured NFTs
        </h1>
        <FeaturedNfts />

        <h1 className="font-delagothicone mt-16 mb-4 text-2xl">
          Live auctions
        </h1>
        <LiveAuctions />

        <h1 className="font-delagothicone mt-16 mb-3 text-2xl w-full">
          We recommend
        </h1>
        <FeaturedSellers />

        <h1
          ref={exploreRef}
          className="font-delagothicone mt-16 mb-4 text-2xl w-full"
        >
          Explore
        </h1>
        <Explore />
      </div>
    </div>
  );
};

export default Home;
