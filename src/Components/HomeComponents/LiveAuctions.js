import { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
import {
  HiOutlineArrowCircleRight,
  HiOutlineArrowCircleLeft,
  HiOutlineEye,
} from "react-icons/hi";

const LiveAuctions = () => {
  const [current, setCurrent] = useState(0);

  // Slider
  const nextSlide = () => {
    setCurrent(current === auctionList.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? auctionList.length - 1 : current - 1);
  };

  let nftsList = useAxios("https://60d1258d7de0b2001710a1cb.mockapi.io/nfts");

  let auctionList = nftsList.filter((nft) => nft.liveauction === true);

  return (
    <div className="flex items-center w-full justify-center">
      <HiOutlineArrowCircleLeft
        className="cursor-pointer text-gray-600 text-4xl mr-4"
        onClick={prevSlide}
      />
      {auctionList.map((nft, index) => (
        <div key={nft.id}>
          {index === current && (
            <Link to={`/nft/${nft.id}`}>
              <div className="relative animate-fade-in flex bg-white bg-opacity-70 flex-col items-center justify-center w-72 h-72 rounded-2xl shadow-lg">
                <img className="w-64 h-52 rounded-2xl" src={nft.img} alt="" />
                <div className="w-60 mt-2">
                  <h1 className="font-medium text-gray-800">{nft.name}</h1>
                  <p className="font-bold">${nft.price}</p>
                </div>
                <div className="flex absolute justify-around items-center w-12 bottom-4 right-4 text-lg">
                  <HiOutlineEye />
                  <p>{nft.viewers}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      ))}
      <HiOutlineArrowCircleRight
        className="cursor-pointer text-gray-600 text-4xl ml-4"
        onClick={nextSlide}
      />
    </div>
  );
};

export default LiveAuctions;
