import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SortMenu from "./SortMenu";

const Explore = () => {
  const [numOfElem, setNumOfElem] = useState(5);
  const [nfts, setNfts] = useState([]);
  const [showSort, setShowSort] = useState(false);

  const getNfts = async () => {
    await axios
      .get("https://60d1258d7de0b2001710a1cb.mockapi.io/nfts")
      .then((res) => {
        setNfts(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNfts();
  }, []);

  const slice = nfts.slice(0, numOfElem);
  const categories = [...new Set(nfts.map((nft) => nft.category))];

  return (
    <div
      className="w-full h-full"
      onClick={() => {
        if (showSort) {
          setShowSort(!showSort);
        }
      }}
    >
      <div className="flex items-center justify-between h-20 w-full">
        <button
          className="w-10 hover:bg-black hover:text-white transition duration-300 ease-in-out shadow"
          onClick={getNfts}
        >
          All
        </button>
        <div className="mx-2 flex items-center overflow-x-scroll w-4/6 h-16 sm:h-14">
          {categories.map((category) => (
            <p
              key={categories.indexOf(category)}
              className="mr-2 cursor-pointer w-24 font-bold text-gray-800 text-sm"
              onClick={() =>
                setNfts(nfts.filter((nft) => nft.category === category))
              }
            >
              {category}
            </p>
          ))}
        </div>
        <SortMenu setShowSort={setShowSort} nfts={nfts} showSort={showSort} />
      </div>
      <div className="flex flex-col mt-4 items-center w-full">
        {slice.map((nft) => (
          <Link key={nft.id} to={`/nft/${nft.id}`}>
            <div
              key={nft.id}
              className="relative flex flex-col justify-evenly items-center h-80 m-2 w-72"
            >
              <img
                src={nft.img}
                className="absolute top-0 z-10 rounded-2xl w-64 h-56 hover:shadow-blue transition duration-300 ease-in-out"
                alt=""
              />
              <div className="pb-3 bg-white bg-opacity-70 flex flex-col items-center justify-end absolute bottom-5 z-1 h-56 rounded-lg shadow-lg border-t-2 w-72">
                <p>{nft.name}</p>
                <p className="font-bold">${nft.price}</p>
              </div>
            </div>
          </Link>
        ))}

        {nfts.length > 5 && (
          <button
            className="my-5 p-2 w-full border-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out font-bold rounded-lg"
            onClick={() => setNumOfElem((prev) => prev + 5)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Explore;
