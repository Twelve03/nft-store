import { useState } from "react";
import useAxios from "../Components/useAxios";
import Footer from "../Components/Footer";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === auctionList.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? auctionList.length - 1 : current - 1);
  };

  let auctionList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/items/"
  );

  let featuredList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/items/"
  );

  return (
    <div className="bg-primary">
      <div className="p-1 flex justify-between flex-col items-center h-screen w-full border-solid border-2 bg-landing-page bg-center bg-cover">
        <h1 className="font-delagothicone text-white pt-16 pl-3 text-6xl">
          Find your NFT
        </h1>
        <button className="mb-12 w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full ">
          Explore
        </button>
      </div>
      <div className="p-3 flex flex-col items-center">
        <div className="mt-20 w-72 h-32 rounded-lg border-solid border-2">
          <img
            src="https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485"
            alt=""
            className="w-full h-full rounded-lg"
          />
          <button className="text-xs h-5 w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Buy!
          </button>
        </div>
        <h1 className="pt-16">Featured NFTs</h1>
        <div className="flex overflow-x-scroll items-center max-h-full max-w-full">
          {featuredList.map((nft) => (
            <div
              key={nft.id}
              className="m-2 p-2 rounded-lg flex flex-col justify-around border-solid border-2 h-64 min-w-max"
            >
              <img src={nft.img} alt="" className="h-48 w-48" />
              <p>{nft.name}</p>
            </div>
          ))}
        </div>
        <h1 className="pt-16">Live auctions</h1>
        <div className="flex items-center w-3/4 justify-center">
          <FaArrowAltCircleLeft onClick={prevSlide} />
          {auctionList.map((item, index) => (
            <div key={item.index}>
              {index === current && (
                <div className="flex flex-col items-center justify-center w-72 h-72 border-2">
                  <img className="w-48 h-48" src={item.img} alt="" />
                  <h1>{item.name}</h1>
                  <p>{item.price}</p>
                </div>
              )}
            </div>
          ))}
          <FaArrowAltCircleRight onClick={nextSlide} />
        </div>
        <h1 className="pt-16">We recommend</h1>
        <div className="flex overflow-x-scroll items-center w-full">
          {auctionList.map((seller) => (
            <div className="flex items-center p-3 min-w-max m-3 border-2 rounded-3xl">
              <img src={seller.img} alt="" className="w-16 h-16 rounded-3xl" />
              <div>
                <p>{seller.name}</p>
                <p>{seller.price}</p>
              </div>
              <button className="w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
                go
              </button>
            </div>
          ))}
        </div>
        <h1 className="pt-16">Explore</h1>
        <div className="flex items-center border-2 w-full">
          <div className="flex overflow-x-scroll w-3/4">
            {auctionList.map((category) => (
              <p className="mr-6">Popular</p>
            ))}
          </div>
          <div className="border-2 w-1/4 text-center">Sort by</div>
        </div>
        <div className="w-full">
          {featuredList.map((item) => (
            <div className="relative flex flex-col justify-evenly items-center h-72 m-2">
              <img src={item.img} className="rounded-2xl" alt="" />
              <p>{item.name}</p>
              <p>{item.price}</p>
              <div className="flex items-center justify-center absolute w-8 h-8 rounded-lg bg-white bottom-16">
                <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
              </div>
            </div>
          ))}
          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Load more
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
