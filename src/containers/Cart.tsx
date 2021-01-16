import React from "react";
import "../css/cart.css";
import FormInfo from "../components/FormInfo";
import ItemsCart from "../components/ItemsCart";

export default function Cart() {
  return (
    <div>
      <ItemsCart/>
      <FormInfo />
    </div>
  );
}
