import React from "react";
import useAxios from "./useAxios";

const FeaturedNfts = () => {
  let featuredList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/featured"
  );

  return (
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
  );
};

export default FeaturedNfts;
