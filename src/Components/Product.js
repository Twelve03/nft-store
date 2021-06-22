import useAxios from "./useAxios";

const Product = ({ match }) => {
  let product = useAxios(
    `https://60d1258d7de0b2001710a1cb.mockapi.io/items/${match.params.id}`
  );

  return (
    <div key={product.id}>
      <h1>{product.name}</h1>
      <img src={product.img} alt="" />
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
