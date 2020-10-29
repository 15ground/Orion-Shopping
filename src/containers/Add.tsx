import React from 'react'
import '../css/add.css';
export default function Add() {
    return (
        <div>
            <div className="box-them">
             <div id="them-san-pham">
          <label htmlFor="hinhAnh">Hình ảnh</label>
          <input name="* Url ảnh" placeholder="Điền url hình ảnh" type="text" id="hinhAnh" />
          <div className="error" />
          <label htmlFor="ten">Tên sản phẩm</label>
          <input name="* Tên sản phẩm" placeholder="Điền tên sản phẩm" type="text" id="ten"/>
          <div className="error" />
          <label htmlFor="giaGoc">Giá gốc</label>
          <input name="* Giá gốc" placeholder="Điền giá gốc sản phẩm" type="number" id="giaGoc" />
          <div className="error" />
          <label htmlFor="phanTramGiamGia">Phần trăm giảm giá</label>
          <input name="* Phần trăm giảm giá" type="number" placeholder="Điền phần trăm giảm giá" id="phanTramGiamGia" />
          <div className=" error" />
          <label htmlFor="khuVuc">Khu vực</label>
          <input name="* Khu vực"  type="text" placeholder="Điền khu vực" id="khuVuc" />
          <div className=" error" />
          <button className="but">Thêm mới sản phẩm</button>
        </div>
      </div>
        </div>
    )
}
