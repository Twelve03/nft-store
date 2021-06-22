import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return products;
};

export default useAxios;
