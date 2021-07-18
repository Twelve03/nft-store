import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import axios from "axios";

const Nft = ({ match }) => {
  const [nft, setNft] = useState({});
  const [showError, setShowError] = useState(false);

  // Animations
  const maskTransition = useTransition(showError, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const errorTransition = useTransition(showError, {
    from: { transform: "translateY(100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(100%)" },
  });

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
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="md:mt-10 mt-8 min-h-screen w-full flex flex-col items-left p-4">
        {/* NFT */}
        <p className="text-lg text-gray-400">{nft.category}</p>
        <h1 className="text-3xl font-bold mb-4 md:self-center">{nft.name}</h1>
        <img
          className="mb-4 self-center h-5/6 w-5/6 md:h-2/4 md:w-2/4 rounded-lg"
          src={nft.img}
          alt={nft.name}
        />

        {/* Creator div*/}
        <p className="font-bold text-gray-800 mt-4">Creator:</p>
        <div className="mb-4 p-3 w-3/4 flex text-white items-center">
          <img
            src={nft.avatar}
            className="mr-2 h-10 w-10 rounded-full"
            alt="creator-name"
          />
          <p className="text-lg text-black font-bold">@{nft.creator}</p>
        </div>

        <p className="mb-6 text-gray-600">{nft.description}</p>

        {/* Buy and place bid Buttons */}
        <div className="h-12 w-full flex items-center rounded-lg md:justify-center md:mt-8">
          <button
            onClick={() => setShowError(!showError)}
            style={{ backgroundColor: "#6df238" }}
            className="mr-3 w-48 h-12 text-white font-bold rounded-full md:mr-8"
          >
            Buy for ${nft.price}
          </button>
          <button
            onClick={() => setShowError(!showError)}
            className="w-48 h-12 border-2 border-black font-bold rounded-full"
          >
            Place a bid
          </button>
        </div>
      </div>

      {/* Animations */}
      <div className="w-full h-full">
        {maskTransition(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="bg-black bg-opacity-20 fixed top-0 left-0 w-full h-full"
                onClick={() => setShowError(false)}
              ></animated.div>
            )
        )}
        {errorTransition(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className="fixed flex items-center justify-center bottom-0 h-1/4 w-full bg-white rounded-t-3xl"
              >
                <p className="text-lg">
                  This is just a front-end only website for now!
                </p>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
};

export default Nft;
