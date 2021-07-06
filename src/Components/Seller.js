import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Seller = ({ match }) => {
  const [seller, setSeller] = useState({});

  useEffect(() => {
    const getSeller = async () => {
      await axios
        .get(
          `https://60d1258d7de0b2001710a1cb.mockapi.io/seller/${match.params.id}`
        )
        .then((res) => {
          setSeller(res.data);
        })
        .catch((error) => console.log(error));
    };
    getSeller();
  }, [match]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="pt-16 flex flex-col items-center min-h-screen w-4/5">
        <img className="rounded-lg mb-2" src={seller.avatar} alt="" />
        <h1 className="text-xl font-bold text-gray-700">
          {`${seller.name} ${seller.lastname}`}
        </h1>
        <p className="text-gray-400">@{seller.username}</p>
        <div className="mt-10 flex bg-white w-full items-center shadow rounded-lg justify-around">
          <div className="text-center w-1/4 cursor-pointer p-2">
            {/* // Check if there's a better way to do this */}
            {seller.created !== undefined && <p>{seller.created.length}</p>}
            <p>Created</p>
          </div>
          <div className="text-center w-1/4 cursor-pointer p-2">
            <p>{seller.following}</p>
            <p>Following</p>
          </div>
          <div className="text-center w-1/4 cursor-pointer p-2">
            <p>{seller.followers}</p>
            <p>Followers</p>
          </div>
        </div>
        <div className="pl-2 w-full mt-10">
          <h1 className="text-lg font-medium text-gray-600">NFTs Created</h1>
        </div>
        {seller.created !== undefined && (
          <div className="flex flex-wrap justify-around items-center w-full">
            {seller.created.map((nft) => (
              <Link key={nft.id} to={`/nft/${nft.id}`}>
                <img src={nft.img} className="m-2 rounded-lg h-56 w-64" alt="" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seller;
