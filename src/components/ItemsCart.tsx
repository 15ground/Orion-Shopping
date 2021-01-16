import React from "react";
import Items from "../components/Items";
import PriceCart from "../components/PriceCart";
import { Item } from "../model/Item";
import { useState } from "react";
import { ProductModel } from "../model/Product";
export default function ItemsCart() {
  function themChamVaoSo(so: any) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function price(imprice: number, percent: number) {
    return (imprice * (100 - percent)) / 100;
  }
  const getData = (): Item[] => {
    let a: Item[] = [];
    let listItem = localStorage.getItem("dsGioHang");
    if (listItem != null) {
      a = JSON.parse(listItem);
    }
    return a;
  };

  const [data, setData] = useState<Item[]>(getData());
  const findByID = (id: string) => {
    let a: ProductModel[] = [];
    let listProduct = localStorage.getItem("key");
    if (listProduct != null) {
      a = JSON.parse(listProduct);
    }
    let product: ProductModel =
      a.find((item) => {
        return item.id === id;
      }) || ({} as ProductModel);
    return product;
  };
  function loadData() {
    let a: Item[] = [];
    let listItem = localStorage.getItem("dsGioHang");
    if (listItem != null) {
      a = JSON.parse(listItem);
    }
    return a;
  }
  function tinhTongTien() {
    let getItem = localStorage.getItem("dsGioHang");
    if (getItem != null) {
      var a = JSON.parse(getItem);
    }
    let getFullItem = localStorage.getItem("key");
    if (getFullItem != null) {
      var b = JSON.parse(getFullItem);
    }
    var totalPrice = 0;
    a.forEach((x: any) => {
      var item = x.id;
      let count = x.soLuong;
      let products = b.find((v: any) => v.id === item);
      let prices = price(products?.imprice || 0, products?.percent || 0);
      totalPrice += prices * count;
    });
    return totalPrice;
  }
  const [priceCart, setpriceCart] = useState(tinhTongTien());
  return (
    <div className="box-container">
      <div className="danh-sach-gio-hang" id="gioHang">
        {data.map((item: any) => {
          let productID = findByID(item.id);
          return (
            <Items
              id={item.id}
              images={productID.images}
              name={productID.name}
              giaGoc={productID.imprice}
              phanTramGiamGia={productID.percent}
              soLuong={item.soLuong}
              khuVuc={productID.location}
              status={(thisID) => {
                let dataCart = loadData();
                let index = dataCart.findIndex((item) => item.id === thisID);
                dataCart.splice(index, 1);
                localStorage.setItem("dsGioHang", JSON.stringify(dataCart));
                setData(dataCart);
                setpriceCart(tinhTongTien());
              }}
              inputChange={(thisID, count) => {
                let changeCount = data.slice();
                let index = changeCount.findIndex((x) => x.id === thisID);
                if (count < 0) {
                  changeCount.splice(index, 1);
                  setData(changeCount);
                  localStorage.setItem(
                    "dsGioHang",
                    JSON.stringify(changeCount)
                  );
                } else {
                  changeCount[index].soLuong = count;
                  setData(changeCount);
                  localStorage.setItem(
                    "dsGioHang",
                    JSON.stringify(changeCount)
                  );
                  setpriceCart(tinhTongTien());
                }
              }}
            />
          );
        })}
      </div>
      <PriceCart totalPrice={themChamVaoSo(priceCart)} />
    </div>
  );
}
