import { useLoaderData } from "react-router-dom";
import { IProduct } from "../../interfaces/product.intarfaces";

export const Product = () => {
  const data = useLoaderData() as IProduct;
  return <div>Product - {data.name}</div>;
};
