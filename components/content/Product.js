import { productData } from "./productData";

const Product = ({ productData }) => {
  const { kicker, title, description } = productData;
  return (
    <div>
      <h1>{kicker}</h1>
      <h2>{title}</h2>
      {description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Product;
