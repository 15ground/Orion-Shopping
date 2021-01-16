import React, { useState } from "react";
import "../css/add.css";
import { ProductModel } from "../model/Product";
export default function Add() {
  const [images, setImages] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(0);
  const [location, setLocation] = useState("");
  const { v4: uuidv4 } = require("uuid");
  const item: ProductModel = {
    id: uuidv4(),
    images: images,
    name: name,
    imprice: price,
    percent: percent,
    location: location,
  };

  function clickMe() {
    // let dayLaDoiTuong = {
    //   id: uuidv4(),
    //   images: images,
    //   name: name,
    //   price: price,
    //   percent: percent,
    //   location: location,
    // };
    let jsonSP = localStorage.getItem("key");
    if (jsonSP != null) {
      var dsSP = JSON.parse(jsonSP);
    }
    if (dsSP == null) {
      dsSP = [];
    }
    dsSP.push(item);
    let listItem = JSON.stringify(dsSP);
    localStorage.setItem("key", listItem);
    alert("Add successfully!");
  }

  return (
    <div>
      <div className="box-them">
        <div id="them-san-pham">
          <label htmlFor="hinhAnh">Hình ảnh</label>
          <input
            name="* Url ảnh"
            onChange={(e) => setImages(e.target.value)}
            placeholder="Điền url hình ảnh"
            type="text"
            id="hinhAnh"
          />
          <div className="error" />
          <label htmlFor="ten">Tên sản phẩm</label>
          <input
            name="* Tên sản phẩm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Điền tên sản phẩm"
            type="text"
            id="ten"
          />
          <div className="error" />
          <label htmlFor="giaGoc">Giá gốc</label>
          <input
            name="* Giá gốc"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            placeholder="Điền giá gốc sản phẩm"
            type="number"
            id="giaGoc"
          />
          <div className="error" />
          <label htmlFor="phanTramGiamGia">Phần trăm giảm giá</label>
          <input
            name="* Phần trăm giảm giá"
            onChange={(e) => setPercent(parseInt(e.target.value))}
            type="number"
            placeholder="Điền phần trăm giảm giá"
            id="phanTramGiamGia"
          />
          <div className=" error" />
          <label htmlFor="khuVuc">Khu vực</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            name="* Khu vực"
            type="text"
            placeholder="Điền khu vực"
            id="khuVuc"
          />
          <div className=" error" />
          <button onClick={clickMe} className="but">
            Thêm mới sản phẩm
          </button>
        </div>
      </div>
    </div>
  );
}
