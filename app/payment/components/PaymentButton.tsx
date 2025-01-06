import React from "react";

interface PaymentButtonProps {
  price: number;
}

export default function PaymentButton({ price }: PaymentButtonProps) {
  const fomattedPrice = price.toLocaleString();
  return (
    <div className="fixed w-[90%] bottom-[5vh] left-1/2 text-center -translate-x-1/2 bg-[#093AEE] rounded-[999px] p-4">
      <span className="text-white font-[400]">{fomattedPrice}원 결제하기</span>
    </div>
  );
}
