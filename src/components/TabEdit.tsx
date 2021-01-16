import React, { useState } from "react";

export default function TabEdit(props: Props) {
  return (
    <div
      className="show"
      style={{ visibility: props.show ? "visible" : "hidden" }}
    >
      <div className="box-sua">
        <div id="them-san-pham1">
          <label htmlFor="hinhAnh">Hình ảnh</label>
          <input
            name="* Url ảnh"
            value={props.img}
            onChange={() => props.setImg}
            placeholder="Điền url hình ảnh"
            type="text"
            id="hinhAnh"
          />
          <div className="error" />
          <label htmlFor="ten">Tên sản phẩm</label>
          <input
            name="* Tên sản phẩm"
            value={props.name}
            onChange={props.setName}
            placeholder="Điền tên sản phẩm"
            type="text"
            id="ten"
          />
          <div className="error" />
          <label htmlFor="giaGoc">Giá gốc</label>
          <input
            name="* Giá gốc"
            value={props.imprice}
            onChange={props.setImPrice}
            placeholder="Điền giá gốc sản phẩm"
            type="number"
            id="giaGoc"
          />
          <div className="error" />
          <label htmlFor="phanTramGiamGia">Phần trăm giảm giá</label>
          <input
            name="* Phần trăm giảm giá"
            value={props.percent}
            onChange={props.setPercent}
            type="number"
            placeholder="Điền phần trăm giảm giá"
            id="phanTramGiamGia"
          />
          <div className=" error" />
          <label htmlFor="khuVuc">Khu vực</label>
          <input
            name="* Khu vực"
            value={props.location}
            onChange={props.setLocation}
            type="text"
            placeholder="Điền khu vực"
            id="khuVuc"
          />
          <div className=" error" />
          <button onClick={() => props.update()} className="but">
            Edit Product
          </button>
          <button onClick={() => props.delete(props.id)} className="but">
            Delete Product
          </button>
          <button onClick={() => props.cancel()} className="but">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
type Props = {
  id: string;
  img: string;
  name: string;
  imprice: number;
  percent: number;
  location: string;
  delete(id: string): void;
  update(): void;
  show: boolean;
  cancel(): void;
  setImg(event: any): void;
  setName(event: any): void;
  setImPrice(event: any): void;
  setPercent(event: any): void;
  setLocation(event: any): void;
};
