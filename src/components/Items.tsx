import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
export default function Items(props: Props) {
  function themChamVaoSo(so: any) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  // function loadData() {
  //   let a: Item[] = [];
  //   let listItem = localStorage.getItem("dsGioHang");
  //   if (listItem != null) {
  //     a = JSON.parse(listItem);
  //   }
  //   return a;
  // }
  // function onClickDeleteItem(id: string) {
  //   let dataCart = loadData();
  //   let index = dataCart.findIndex((item) => item.id === id);
  //   dataCart.splice(index, 1);
  //   localStorage.setItem("dsGioHang", JSON.stringify(dataCart));
  // }
  return (
    <div>
      <div className="sanPham">
        <img src={props.images} alt="" className="hinhAnh" />
        <p className="tenSanPham"> {props.name} </p>
        <div className="khungGia">
          <span className="giaGoc"> {themChamVaoSo(props.giaGoc)} </span>
          <span className="giaBan">
            {" "}
            {themChamVaoSo((props.giaGoc * (100 - props.phanTramGiamGia)) / 100)}{" "}
          </span>
        </div>
        <input
          type="number"
          defaultValue={props.soLuong}
          className="soLuong"
          onChange={(e) => {
            props.inputChange(props.id, parseInt(e.target.value));
          }}
        />
        <FontAwesomeIcon
          icon={faShoppingBasket}
          onClick={() => {
            props.status(props.id);
          }}
          style={{cursor: "pointer"}}
        />
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
  soLuong: number;
  khuVuc: string;
  status(id: string): void;
  inputChange(id: string, count: number): void;
};
