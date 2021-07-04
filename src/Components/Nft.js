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
    <div className="border-2 flex h-screen items-center justify-center ">
      <div className="h-4/5 w-4/5 flex flex-col items-left p-3">
        <p className="text-lg text-gray-300">{nft.category}</p>
        <h1 className="text-3xl font-bold mb-4">{nft.name}</h1>
        <p className="mb-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
        </p>
        <div
          className="mb-8 bg-cover bg-center h-72 w-full rounded-lg"
          style={{ backgroundImage: `url("${nft.img}")` }}
        ></div>
        <div className="p-2 h-12 w-full flex items-center rounded-lg bg-gray-100">
          <button className=" mr-10 h-10 w-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Buy
          </button>
          <div className="">
            <p className="text-gray-600">For a price of</p>
            <p className="font-bold">${nft.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
