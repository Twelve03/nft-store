import useAxios from "../Components/useAxios";

const Home = () => {
  let featuredList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/items/"
  );

  return (
    <div>
      <div className="p-1 flex justify-between flex-col items-center h-screen w-full border-solid border-2 bg-landing-page bg-cover">
        <h1 className="font-delagothicone text-white pt-16 pl-3 text-6xl">
          Find your NFT
        </h1>
        <button className="mb-12 w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full ">
          Explore
        </button>
      </div>
      <div className="p-3 flex flex-col items-center">
        <div className="mt-20 w-72 h-32 rounded-lg border-solid border-2">
          <img
            src="https://live-production.wcms.abc-cdn.net.au/cbe346eee79d3e08dee5e8eb04284438?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=574&width=862&height=485"
            alt=""
            className="w-full h-full rounded-lg"
          />
          <button className="text-xs h-5 w-12 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">
            Buy!
          </button>
        </div>
        <h1 className="pt-16">Featured NFTs</h1>
        <div className="flex overflow-x-scroll items-center max-h-full max-w-full">
          {featuredList.map((nft) => (
            <div
              key={nft.id}
              className="m-2 p-2 rounded-lg flex flex-col justify-around border-solid border-2 h-64 min-w-max"
            >
              <img src={nft.img} alt="" className="h-48 w-48" />
              <p>{nft.name}</p>
            </div>
          ))}
        </div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default Home;
