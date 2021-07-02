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
  }, []);

  return (
    <div>
      <h1>{nft.name}</h1>
    </div>
  );
};

export default Nft;
