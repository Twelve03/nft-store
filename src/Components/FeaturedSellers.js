import { Link } from "react-router-dom";
import useAxios from "./useAxios";

const FeaturedSellers = () => {
  let featuredSellers = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/seller"
  );

  return (
    <div className="flex overflow-x-scroll items-center w-full">
      {featuredSellers.map((seller) => (
        <Link key={seller.id} to={`/seller/${seller.id}`}>
          <div className="flex items-center p-3 min-w-max m-3 border-2 rounded-3xl">
            <img
              src={seller.avatar}
              alt=""
              className="w-16 h-16 rounded-2xl mr-4"
            />
            <div>
              <p>User:</p>
              <p className="mr-4">{seller.username}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedSellers;
