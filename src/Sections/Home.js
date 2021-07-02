import { useRef } from "react";
import FeaturedNfts from "../Components/FeaturedNfts";
import LiveAuctions from "../Components/LiveAuctions";
import FeaturedSellers from "../Components/FeaturedSellers";
import Explore from "../Components/Explore";
import Footer from "../Components/Footer";

const Home = () => {
  const exploreRef = useRef(null);
  const executeScroll = () => exploreRef.current.scrollIntoView();

  return (
    <div>
      {/* Landing Page */}
      <div className="p-2 flex justify-between flex-col items-left h-screen w-full bg-black bg-cover bg-center">
        <img
          src="https://i.pinimg.com/originals/9d/43/da/9d43da092565f9f5003c3aaa64292902.gif"
          alt=""
          className="h-2/4 pt-20"
        />
        <p className="text-gray-400 pl-6 -mb-7">NFT Marketplace</p>
        <h1 className="font-delagothicone text-white pl-6 text-3xl">
          NFThis
          <br />━ For those with creative minds.
        </h1>

        <button
          onClick={executeScroll}
          className="mb-7 ml-6 w-32 h-12 bg-transparent text-gray-200 font-bold border rounded-lg "
        >
          Explore
        </button>
      </div>

      {/* Top NFT */}
      <div className="p-3 flex flex-col items-center">
        <div className="relative mt-20 w-72 h-32 rounded-lg border-solid border-2">
          <img
            src="https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485"
            alt=""
            className="w-full h-full rounded-lg"
          />
          <button className="absolute bottom-2 right-2 text-xs h-5 w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Buy
          </button>
        </div>

        <h1 className="mt-16 mb-4 text-2xl w-full font-bold">Featured NFTs</h1>
        <FeaturedNfts/>

        <h1 className="mt-16 mb-4 text-2xl font-bold">Live auctions</h1>
        <LiveAuctions />

        <h1 className="mt-16 mb-4 text-2xl w-full font-bold">We recommend</h1>
        <FeaturedSellers />

        <h1 ref={exploreRef} className="mt-16 mb-4 text-2xl w-full font-bold">
          Explore
        </h1>
        <Explore />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
