import React from "react";

export default function PaymentAccount() {
  return (
    <div className="bg-white rounded-[1rem] py-6 px-4 space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-[17px] font-bold">결제 금액</span>
        <span className="text-[17px] font-bold">10,000원</span>
      </div>
      <hr />
      <div className="font-[400] text-[#7E7F83] flex justify-between items-center">
        <span>주차요금</span>
        <span>10,000원</span>
      </div>
    </div>
  );
}
