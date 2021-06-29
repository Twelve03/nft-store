import { useState } from "react";
import useAxios from "../Components/useAxios";
import Footer from "../Components/Footer";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
  HiOutlineEye,
} from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Home = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === auctionList.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? auctionList.length - 1 : current - 1);
  };

  let exploreList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/items"
  );

  let featuredSellers = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/Sellers"
  );

  let auctionList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/auctions"
  );

  let featuredList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/featured"
  );

  return (
    <div>
      <div className="p-1 flex justify-between flex-col items-left h-screen w-full bg-black bg-cover bg-center">
        <img
          src="http://24.media.tumblr.com/055790c6cbebc03c11e239a05a8653cb/tumblr_mxri5oDzoq1smtd9go1_500.gif"
          alt=""
          className="h-2/4"
        />
        <p className="text-gray-400 pl-6 -mb-7">NFT Marketplace</p>
        <h1 className="font-delagothicone text-white pl-6 text-3xl">
          NFThis
          <br />━ For those with creative minds.
        </h1>
        <button className="mb-7 ml-6 w-32 h-12 bg-transparent text-gray-200 font-bold border rounded-lg ">
          Explore
        </button>
      </div>
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
        <div className="flex overflow-x-scroll items-center max-h-full max-w-full">
          {featuredList.map((nft) => (
            <div
              key={nft.id}
              className="m-2 p-2 rounded-lg flex flex-col justify-around border-solid border-2 h-64 min-w-max"
            >
              <img src={nft.img} alt="" className="h-48 w-48 rounded-lg" />
              <p>{nft.name}</p>
            </div>
          ))}
        </div>
        <h1 className="mt-16 mb-4 text-2xl font-bold">Live auctions</h1>
        <div className="flex items-center w-full justify-center">
          <HiOutlineArrowCircleLeft
            className="cursor-pointer text-gray-600 text-4xl mr-4"
            onClick={prevSlide}
          />
          {auctionList.map((nft, index) => (
            <div key={nft.id}>
              {index === current && (
                <div className="relative flex flex-col items-center justify-center w-72 h-72 border-2 rounded-2xl shadow-lg">
                  <img className="w-64 h-52 rounded-2xl" src={nft.img} alt="" />
                  <div className="w-60 mt-2">
                    <h1 className="font-medium text-gray-800">{nft.name}</h1>
                    <p className="font-bold">${nft.bid}</p>
                  </div>
                  <div className="flex absolute justify-around items-center w-12 bottom-4 right-4 text-lg">
                    <HiOutlineEye />
                    <p>{nft.viewers}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
          <HiOutlineArrowCircleRight
            className="cursor-pointer text-gray-600 text-4xl ml-4"
            onClick={nextSlide}
          />
        </div>
        <h1 className="mt-16 mb-4 text-2xl w-full font-bold">We recommend</h1>
        <div className="flex overflow-x-scroll items-center w-full">
          {featuredSellers.map((seller) => (
            <div
              key={seller.id}
              className="flex items-center p-3 min-w-max m-3 border-2 rounded-3xl"
            >
              <img
                src={seller.avatar}
                alt=""
                className="w-16 h-16 rounded-2xl mr-4"
              />
              <div>
                <p>User:</p>
                <p className="mr-4">{seller.username}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="mt-16 mb-4 text-2xl w-full font-bold">Explore</h1>
        <div className="flex items-center h-14 w-full">
          <div className="flex overflow-x-scroll w-3/4">
            {exploreList.map((nft) => (
              <p key={nft.id} className="mr-6">
                Popular
              </p>
            ))}
          </div>
          <div className="border-2 w-1/4 text-center">Sort by</div>
        </div>
        <div className="flex flex-col items-center w-full">
          {exploreList.map((nft) => (
            <div
              key={nft.id}
              className="relative flex flex-col justify-evenly items-center h-72 m-2 max-w-max"
            >
              <img src={nft.img} className="rounded-2xl" alt="" />
              <p>{nft.name}</p>
              <p>{nft.price}</p>
              <div className="absolute left-3/4 flex items-center justify-center w-8 h-8 rounded-lg bg-green-200 bottom-24 right-24">
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
