import React from "react";
import { Item } from "../model/Item";
export default function Product(props: Props) {
  function themChamVaoSo(so: any) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  function callData() {
    var dsItems: Item[] = [];
    var jsonItems = localStorage.getItem("dsGioHang");
    if (jsonItems != null) {
      dsItems = JSON.parse(jsonItems);
    } else {
      localStorage.setItem("dsGioHang", "");
    }
    return dsItems;
  }

  function onClickAddToCart(idSanPham: string) {
    let check = false;
    var dsItems: Item[] = callData();
    dsItems.forEach((x) => {
      if (x.id === idSanPham) {
        ++x.soLuong;
        check = true;
      }
      return;
    });
    if (check === false) {
      const newItems: Item = {
        id: idSanPham,
        soLuong: 1,
      };
      dsItems.push(newItems);
    }
    localStorage.setItem("dsGioHang", JSON.stringify(dsItems));
    alert("Add to cart successfully!");
  }
  return (
    <div>
      <div id="hien-thi-san-pham">
        <div className="san-pham">
          <div className="hinh-anh">
            <img src={props.images} alt="" />
          </div>
          <h1 className="ten-san-pham"> {props.name} </h1>
          <span className="gia-goc">{themChamVaoSo(props.giaGoc)}</span>
          <span className="gia-ban">
            {" "}
            {themChamVaoSo((props.giaGoc * (100 - props.phanTramGiamGia)) / 100)}{" "}
          </span>
          <p className="khu-vuc"> {props.khuVuc} </p>
          <button
            onClick={() => onClickAddToCart(props.id)}
            className="btn-them"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
type Props = {
  id: string;
  images: string;
  name: string;
  giaGoc: number;
  phanTramGiamGia: number;
  khuVuc: string;
};
