import React, { useState } from "react";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import EditProduct from "../components/EditProduct";
import { ProductModel } from "../model/Product";

const getData = (): ProductModel[] => {
  let a: ProductModel[] = [];
  let listItem = localStorage.getItem("key");
  if (listItem != null) {
    a = JSON.parse(listItem);
  }
  return a;
};
export default function Edit() {
  const [show, setshow] = useState<ProductModel[]>(getData);
  console.log(show);

  return (
    <div>
      <Slider></Slider>
      <Menu />
      {show.map((item: any) => {
        return (
          <EditProduct
            id={item.id}
            images={item.images}
            name={item.name}
            giaGoc={item.imprice}
            phanTramGiamGia={item.percent}
            khuVuc={item.location}
            delete={(thisID) => {
              let product = show.slice();
              let index = product.findIndex((item) => item.id === thisID);
              product.splice(index, 1);
              setshow(product);
              localStorage.setItem("key", JSON.stringify(product));
            }}
            update={(
              thisID,
              thisImages,
              thisName,
              thisImPrice,
              thisPercent,
              thisLocation
            ) => {
              let editProdcut = show.slice();
              let index = editProdcut.findIndex((item) => item.id === thisID);
              editProdcut[index].images = thisImages;
              editProdcut[index].name = thisName;
              editProdcut[index].imprice = thisImPrice;
              editProdcut[index].percent = thisPercent;
              editProdcut[index].location = thisLocation;
              setshow(editProdcut);
              localStorage.setItem("key", JSON.stringify(editProdcut));
            }}
          />
        );
      })}
    </div>
  );
}
