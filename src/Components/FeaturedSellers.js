import useAxios from "./useAxios";

const FeaturedSellers = () => {
  let featuredSellers = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/Sellers"
  );

  return (
    <div className="flex overflow-x-scroll items-center w-full">
      {featuredSellers.map((seller) => (
        <div
          key={seller.id}
          className="flex items-center p-3 min-w-max m-3 border-2 rounded-3xl"
        >
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
      ))}
    </div>
  );
};

export default FeaturedSellers;
