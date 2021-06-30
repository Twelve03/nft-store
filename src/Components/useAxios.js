import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return apiData;
};

export default useAxios;
