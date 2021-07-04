const About = () => {
  return (
    <div className="min-h-screen">
      <div className="p-8 h-screen mt-8 ">
        <h1 className="text-3xl mb-4">What is an NFT?</h1>
        <div className="flex text-gray-600 flex-col justify-between">
          <p>
            NFT stands for non-fungible tokens like ERC-721 (a smart contract
            standard) tokens which are hosted on Ethereum’s own blockchain. NFTs
            are unique digital items such as collectibles or artworks or game
            items.
          </p>
          <p className="mt-2">
            As an artist, by tokenizing your work you both ensure that it is
            unique and brand it as your work. The actual ownership is
            blockchain-managed.
          </p>
          <p className="mt-2">
            “Non-fungible” more or less means that it’s unique and can’t be
            replaced with something else.
          </p>
        </div>
        <h2 className="mt-6 text-2xl mb-4">How do NFTs work?</h2>
        <p className="text-gray-600">
          At a very high level, most NFTs are part of the Ethereum blockchain.
          Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its
          blockchain also supports these NFTs, which store extra information
          that makes them work differently from, say, an ETH coin. It is worth
          noting that other blockchains can implement their own versions of
          NFTs.
        </p>
      </div>
      <div className=" flex items-center border-2 h-screen bg-blue-400">
        <div className="flex flex-col items-center justify-center  h-3/4 w-full">
          <img
            src="https://i.ibb.co/djPF91c/nfthis-logo.png"
            alt=""
            className="h-24 w-26 mb-10 -mt-20"
          />
          <p className="text-center text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus
            eum laborum rem molestiae eius accusantium dolorem atque illo!
            Perspiciatis autem quaerat sunt deleniti tempore nesciunt,
            accusantium ut doloribus! Unde.
          </p>
        </div>
      </div>
      <div className="h-screen">
        <div className="p-8 h-screen mt-10 ">
          <h1 className="text-2xl mb-4">What is an NFT?</h1>
          <div className="flex text-gray-600 flex-col justify-between">
            <p>
              NFT stands for non-fungible tokens like ERC-721 (a smart contract
              standard) tokens which are hosted on Ethereum’s own blockchain.
              NFTs are unique digital items such as collectibles or artworks or
              game items.
            </p>
            <p className="mt-2">
              As an artist, by tokenizing your work you both ensure that it is
              unique and brand it as your work. The actual ownership is
              blockchain-managed.
            </p>
            <p className="mt-2">
              “Non-fungible” more or less means that it’s unique and can’t be
              replaced with something else.
            </p>
          </div>
          <h2 className="mt-6 text-2xl mb-4">How do NFTs work?</h2>
          <p className="text-gray-600">
            At a very high level, most NFTs are part of the Ethereum blockchain.
            Ethereum is a cryptocurrency, like bitcoin or dogecoin, but its
            blockchain also supports these NFTs, which store extra information
            that makes them work differently from, say, an ETH coin. It is worth
            noting that other blockchains can implement their own versions of
            NFTs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
