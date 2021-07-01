import { useState, useEffect } from "react";
import axios from "axios";
import SortMenu from "./SortMenu";

const Explore = () => {
  const [numOfElem, setNumOfElem] = useState(5);
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

  const slice = nfts.slice(0, numOfElem);

  return (
    <>
      <div className="flex items-center justify-between h-14 w-full">
        <button className="mr-2">All</button>
        <div className="flex items-center overflow-x-scroll w-4/6"></div>
        <SortMenu setShowSort={setShowSort} nfts={nfts} showSort={showSort} />
      </div>
      <div className="flex flex-col items-center w-full">
        {slice.map((nft) => (
          <div
            key={nft.id}
            className="relative flex flex-col justify-evenly items-center h-72 m-2 w-64"
          >
            <img
              src={nft.img}
              className="absolute top-0 z-10 rounded-2xl w-48 h-48"
              alt=""
            />
            <div className="pb-5 flex flex-col items-center justify-end absolute bottom-0 z-1 h-56 rounded-lg w-64 border-2">
              <p>{nft.name}</p>
              <p>{nft.price}</p>
            </div>
          </div>
        ))}

        <button
          className="my-5 p-2 w-full border-2 border-black hover:bg-black hover:text-white font-bold rounded-lg"
          onClick={() => setNumOfElem((prev) => prev + 5)}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Explore;
