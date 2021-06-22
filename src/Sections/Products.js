import useAxios from "../Components/useAxios";
import { Link } from "react-router-dom";

const Products = () => {
  let productList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/items/"
  );

  return (
    <div>
      {productList.map((product) => (
        <Link to={`products/${product.id}`} key={product.id}>
          <div>
            <h1>{product.name}</h1>
            <img src={product.img} alt="" />
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
