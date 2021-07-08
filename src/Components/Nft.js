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
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="h-4/5 w-4/5 flex flex-col items-left p-3">
        <p className="text-lg text-gray-300">{nft.category}</p>
        <h1 className="text-3xl font-bold mb-4">{nft.name}</h1>
        <div
          className="relative mb-4 bg-cover bg-center h-full w-full rounded-lg"
          style={{ backgroundImage: `url("${nft.img}")` }}
        >
          <div className="absolute bottom-0 p-3 w-3/4 flex text-white items-center">
            <img
              src="https://imgprd19.hobbylobby.com/5/2e/27/52e275124d45cee86d1d881315801cb61fddae13/700Wx700H-1751700-0219.jpg"
              className="mr-2 h-10 w-10 rounded-full"
              alt="creator-name"
            />
            <p>Creator's name</p>
          </div>
        </div>
        <p className="mb-6 text-gray-600">{nft.description}</p>
        <div className="h-12 w-full flex items-center rounded-lg">
          <button style={{backgroundColor :"#6df238"}} className="mr-3 w-48 h-12 text-white font-bold rounded-full">
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
