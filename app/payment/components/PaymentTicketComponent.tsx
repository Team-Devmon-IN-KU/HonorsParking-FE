"use client";

import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import PaymentTicketList from "./PaymentTicketList";
import Image from "next/image";

export default function PaymentTicketComponent() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const bottomSheetOpen = () => {
    setIsBottomSheetOpen((prev) => !prev);
  };

  const ticketNum = 5;
  return (
    <div className="bg-white rounded-[1rem] py-6 px-4 space-y-6">
      <div className="flex justify-between items-center">
        <span className="font-[700] text-md">할인쿠폰</span>
        <span className="font-[500] text-[#7E7F83] text-[14px]">
          {ticketNum}장 보유
        </span>
      </div>
      <button
        className="flex items-center justify-between w-full"
        onClick={bottomSheetOpen}
      >
        <span className="font-[500] text-md text-[#4C4D4F]">
          쿠폰을 선택해주세요!
        </span>
        <MdKeyboardArrowRight color="#4C4D4F" size={24} />
      </button>
      <div
        className={`fixed bg-[#F0F0F0] inset-0 transition-all duration-300 ${
          isBottomSheetOpen ? "-translate-y-0" : "translate-y-full"
        } transform transition-all h-[100vh] w-full px-6 z-[100]`}
      >
        <div className="flex items-center relative justify-center">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2"
            onClick={bottomSheetOpen}
          >
            <Image src="/src/icon/Cancel.svg" alt="" width={24} height={24} />
          </button>
          <span className="font-[700]">할인쿠폰</span>
        </div>
        <div className="pt-8">
          <PaymentTicketList />
        </div>
      </div>
    </div>
  );
}
