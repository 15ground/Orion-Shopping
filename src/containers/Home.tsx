import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import Product from "../components/Product";
import { PushANumber } from "../services/ConnectServices";
import Axios from "axios";
const listProducts = localStorage.getItem("key");
if (listProducts != null) {
  var a = JSON.parse(listProducts);
}
const numberA = PushANumber.returnANumber(19);
console.log(numberA);

export default function Home() {
  const [data, setData] = useState(a);
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const url = 'http://localhost:2001/';
        const response = await Axios.get(url);
        console.log(response.data);
        setPostList(response.data);
      } catch (error) {
        console.log('Failed to fetch products: ', error);
      }

    }
    fetchPostList();
  }, [])

  return (
    <div>
      <Slider></Slider>
      <Menu />
      {data.map((item: any) => {
        return (
          <Product
            id={item.id}
            images={item.images}
            name={item.name}
            giaGoc={item.imprice}
            phanTramGiamGia={item.percent}
            khuVuc={item.location}
          />
        );
      })}
    </div>
  );
}
