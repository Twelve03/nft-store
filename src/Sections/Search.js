import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Search = () => {
  const [nfts, setNfts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <img
        src="https://i.ibb.co/djPF91c/nfthis-logo.png"
        alt=""
        className="mt-14 h-40 w-40"
      />
      <input
        type="text"
        className="mt-10 p-1 pl-3 rounded-md w-2/4"
        placeholder="Search for NFT name"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="mt-10">
        {nfts
          .filter((nft) => {
            if (searchTerm === "") {
              return null;
            } else if (
              nft.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return nft;
            } else {
              return null;
            }
          })
          .map((nft) => (
            <Link key={nft.id} to={`/nft/${nft.id}`}>
              <div
                style={{ backgroundImage: `url("${nft.img}")` }}
                className="h-64 w-64 bg-cover bg-center mb-8 rounded-3xl p-6"
              >
                <p className="font-bold font-xl">{nft.name}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Search;
