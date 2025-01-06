import React from "react";
import Image from "next/image";
import { Coupon } from "./PaymentTicketComponent";

interface PaymentTicektProps {
  coupon: Coupon;
  isSelected: boolean;
  onToggle: (coupon: Coupon) => void;
}

export default function PaymentTicket({
  coupon,
  isSelected,
  onToggle,
}: PaymentTicektProps) {
  return (
    <div className={`w-full bg-white rounded-[20px] flex items-center box-border gap-2 ${isSelected  ? "border-2 border-[#093AEE] p-[18px]" : "p-[1.25rem]"}`} onClick={() => onToggle(coupon)}>
      <div className="rounded-full bg-[#F6F6F6] w-[45px] h-[45px] flex items-center justify-center">
        {isSelected ? (
          <Image
            src="/src/icon/OnTicket.svg"
            alt=""
            width={20}
            height={24}
          />
        ) : (
          <Image
            src="/src/icon/TicketNotOutline.svg"
            alt=""
            width={20}
            height={24}
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="textmd font-[500] text-black">{coupon.name}</span>
        <span className="text-[#7E7F83] font-[500] text-[14px]">
          {coupon.daysUntilExpiry}일 후에 만료됨
        </span>
      </div>
    </div>
  );
}
