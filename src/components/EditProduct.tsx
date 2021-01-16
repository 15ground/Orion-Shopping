import React, { useState } from "react";
import { ProductModel } from "../model/Product";
import TabEdit from "./TabEdit";

export default function EditProduct(props: Props) {
  function themChamVaoSo(so: any) {
    return so.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const getData = (): ProductModel[] => {
    let a: ProductModel[] = [];
    let listItem = localStorage.getItem("key");
    if (listItem != null) {
      a = JSON.parse(listItem);
    }
    return a;
  };
  const [status, setStatus] = useState<boolean>(false);
  function onClickEdit(idSanPham: string) {
    setStatus(true);
    var item: ProductModel[] = getData();
    item.forEach((x) => {
      if (x.id === idSanPham) {
        console.log(idSanPham);
      }
    });
  }
  function setFalse() {
    setStatus(false);
  }
  const [img, setImg] = useState<string>(props.images);
  const [name, setName] = useState<string>(props.name);
  const [imprice, setImPrice] = useState<number>(props.giaGoc);
  const [percent, setPercent] = useState<number>(props.phanTramGiamGia);
  const [location, setLocation] = useState<string>(props.khuVuc);

  const setimg = (event: any) => {
    setImg(event.target.value);
  };
  const setname = (event: any) => {
    setName(event.target.value);
  };
  const setimprice = (event: any) => {
    setImPrice(parseInt(event.target.value));
  };
  const setpercent = (event: any) => {
    setPercent(parseInt(event.target.value));
  };
  const setlocation = (event: any) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <TabEdit
        show={status}
        cancel={setFalse}
        id={props.id}
        delete={() => {
          props.delete(props.id);
          setStatus(false);
        }}
        update={() => {
          props.update(props.id, img, name, imprice, percent, location);
          alert("Edit succesfully!");
          setStatus(false);
        }}
        img={img}
        setImg={setimg}
        name={name}
        setName={setname}
        imprice={imprice}
        setImPrice={setimprice}
        percent={percent}
        setPercent={setpercent}
        location={location}
        setLocation={setlocation}
      />

      <div className="show-edit-page">
        <div id="hien-thi-san-pham">
          <div className="san-pham">
            <div className="hinh-anh">
              <img src={props.images} alt="" />
            </div>
            <h1 className="ten-san-pham"> {props.name} </h1>
            <span className="gia-goc">{themChamVaoSo(props.giaGoc)}</span>
            <span className="gia-ban">
              {" "}
              {themChamVaoSo(
                (props.giaGoc * (100 - props.phanTramGiamGia)) / 100
              )}{" "}
            </span>
            <p className="khu-vuc"> {props.khuVuc} </p>
            <button onClick={() => onClickEdit(props.id)} className="btn-them">
              Edit Product
            </button>
          </div>
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
  delete(id: string): void;
  update(
    id: string,
    img: string,
    name: string,
    imprice: number,
    percent: number,
    location: string
  ): void;
};
