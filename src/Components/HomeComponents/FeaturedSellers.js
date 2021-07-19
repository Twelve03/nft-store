import { Link } from "react-router-dom";
import useAxios from "../useAxios";

const FeaturedSellers = () => {
  let featuredSellers = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/seller"
  );

  return (
    <div className="flex overflow-x-scroll items-center w-full">
      {featuredSellers.map((seller) => (
        <Link key={seller.id} to={`/seller/${seller.id}`}>
          <div className="flex justify-around bg-white bg-opacity-70 items-center p-3 min-w-max m-3 rounded-3xl transform transition duration-500 hover:scale-110 hover:shadow-md">
            <img
              src={seller.avatar}
              alt=""
              className="w-16 h-16 rounded-2xl mr-4"
            />
            <div>
              <p className="mr-4 font-bold">{seller.username}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedSellers;
