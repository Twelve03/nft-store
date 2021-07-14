import { useState, useEffect } from "react";
import axios from "axios";

const Nft = ({ match }) => {
  const [nft, setNft] = useState({});

  useEffect(() => {
    const getNft = async () => {
      await axios
        .get(
          `https://60d1258d7de0b2001710a1cb.mockapi.io/nfts/${match.params.id}`
        )
        .then((res) => {
          setNft(res.data);
        })
        .catch((error) => console.log(error));
    };
    getNft();
  }, [match]);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="mt-8 min-h-screen w-full flex flex-col items-left p-4">
        <p className="text-lg text-gray-400">{nft.category}</p>
        <h1 className="text-3xl font-bold mb-4 md:self-center">{nft.name}</h1>
        <img
          className="mb-4 self-center h-5/6 w-5/6 md:h-2/4 md:w-2/4 rounded-lg"
          src={nft.img}
          alt={nft.name}
        />
        <p className="font-medium text-gray-800 mt-4">Creator:</p>
        <div className="mb-4 p-3 w-3/4 flex text-white items-center">
          <img
            src={nft.avatar}
            className="mr-2 h-10 w-10 rounded-full"
            alt="creator-name"
          />
          <p className="text-lg text-black font-medium">@{nft.creator}</p>
        </div>
        <p className="mb-6 text-gray-600">{nft.description}</p>
        <div className="h-12 w-full flex items-center rounded-lg md:justify-center md:mt-8">
          <button
            style={{ backgroundColor: "#6df238" }}
            className="mr-3 w-48 h-12 text-white font-bold rounded-full md:mr-8"
          >
            Buy for ${nft.price}
          </button>
          <button className="w-48 h-12 border-2 border-black font-bold rounded-full">
            Place a bid
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nft;
