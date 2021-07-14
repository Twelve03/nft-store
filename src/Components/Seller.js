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
        <h1 className="text-xl font-bold">
          {`${seller.name} ${seller.lastname}`}
        </h1>
        <p className="text-gray-400">@{seller.username}</p>
        <div className="mt-10 flex items-center shadow rounded-lg justify-around">
          <div className="text-center text-white w-28 bg-blue-500 shadow cursor-pointer p-2 rounded-l-lg">
            {/* // Check if there's a better way to do this */}
            {seller.created !== undefined && <p className="font-medium">{seller.created.length}</p>}
            <p className="font-medium">Created</p>
          </div>
          <div className="text-center w-28 bg-white cursor-pointer border-r-2 p-2">
            <p>{seller.following}</p>
            <p className="font-medium text-gray-800">Following</p>
          </div>
          <div className="text-center w-28 bg-white cursor-pointer p-2 rounded-r-lg">
            <p>{seller.followers}</p>
            <p className="font-medium text-gray-800">Followers</p>
          </div>
        </div>
        <div className="pl-2 w-full mt-10">
          <h1 className="text-lg font-medium text-gray-600">NFTs Created</h1>
        </div>
        {seller.created !== undefined && (
          <div className="flex flex-wrap justify-around items-center w-full">
            {seller.created.map((nft) => (
              <Link key={nft.id} to={`/nft/${nft.id}`}>
                <img
                  src={nft.img}
                  className="m-2 rounded-lg h-64 w-64"
                  alt=""
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seller;
