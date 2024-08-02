import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";

export const MenuList = ({ products }: MenuListProps) => {
  return products.map((p) => (
    <ProductCard
      key={p.id}
      id={p.id}
      name={p.name}
      ingredients={p.ingredients.join(", ")}
      rating={p.rating}
      price={p.price}
      img={p.image}
    />
  ));
};
