import React from "react";

export default function PriceCart(props: Props) {
  return (
    <div>
      <div className="thanhTien">
        <p className="text">Thành tiền: {props.totalPrice}</p>
      </div>
    </div>
  );
}
type Props = {
  totalPrice: number;
};
