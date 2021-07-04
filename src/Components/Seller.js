import { useState, useEffect } from "react";
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
    <div>
      <h1>{seller.username}</h1>
    </div>
  );
};

export default Seller;
