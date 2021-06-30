import { useState, useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import SortMenu from "./SortMenu";

const Explore = () => {
  const [nfts, setNfts] = useState([]);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    const getNfts = async () => {
      await axios
        .get("https://60d1258d7de0b2001710a1cb.mockapi.io/nfts")
        .then((res) => {
          setNfts(res.data);
        })
        .catch((error) => console.log(error));
    };
    getNfts();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between h-14 w-full">
        <div className="flex overflow-x-scroll w-4/6">
          <button>All</button>
        </div>
        <SortMenu setShowSort={setShowSort} nfts={nfts} showSort={showSort} />
      </div>
      <div className="flex flex-col items-center w-full">
        {nfts.map((nft) => (
          <div
            key={nft.id}
            className="relative flex flex-col justify-evenly items-center h-72 m-2 max-w-max"
          >
            <img src={nft.img} className="rounded-2xl w-48 h-48" alt="" />
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
    </>
  );
};

export default Explore;
