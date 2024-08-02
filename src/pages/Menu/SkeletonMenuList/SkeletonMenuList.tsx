import { SkeletonCard } from "../../../components/ProductCard/SkeletonCard";

export const SkeletonMenuList = () => {
  return Array(6)
    .fill(0)
    .map((_, index) => <SkeletonCard key={index} />);
};
