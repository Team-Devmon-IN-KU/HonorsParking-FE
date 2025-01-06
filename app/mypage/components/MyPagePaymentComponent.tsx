import React from "react";

export default function MyPagePaymentComponent() {
  const paymentData = {
    name: "A타워",
    time: 30,
    price: 1000,
    pricePerHour: 500
  };

  return (
    <div className="rounded-[1.25rem] bg-white w-full flex flex-col p-3 gap-1">
      <span className="font-[500] text-[#2A2A2A] text-[14px]">{paymentData.name}</span>
      <div className="flex flex-col">
        <span className="text-[#2A2A2A] font-[700] text-[1.25rem]">입차시간 : {paymentData.time}분</span>
        <span className="text-md font-[400] text-[#7E7F83]">비용 : {paymentData.price} / 시간당 {paymentData.pricePerHour}</span>
      </div>
      <button className="bg-[#093AEE] text-white text-md font-[500] p-3 rounded-[999px] mt-3">{paymentData.price}원 결제하기</button>
    </div>
  );
}
