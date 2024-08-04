import { Await, useLoaderData } from "react-router-dom";
import { IProduct } from "../../interfaces/product.intarfaces";
import { Suspense } from "react";

export const Product = () => {
  const data = useLoaderData() as { data: IProduct };

  return (
    <>
      <Suspense fallback={"...загрузка"}>
        <Await resolve={data.data}>
          {({ data }: { data: IProduct }) => <>Product - {data.name}</>}
        </Await>
      </Suspense>
      {/* <div>Product - {data.name}</div>; */}
    </>
  );
};
