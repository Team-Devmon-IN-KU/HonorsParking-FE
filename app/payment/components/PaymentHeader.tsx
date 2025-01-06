"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function PaymentHeader() {
  const router = useRouter();

  return (
    <div className="relative w-full flex items-center justify-center p-6">
      <button onClick={() => router.back()}>
        <MdKeyboardArrowLeft
          className="absolute left-6 top-6"
          size={24}
          color="#2A2A2A"
        />
      </button>
      <span className="font-[700] text-[17px]">결제하기</span>
    </div>
  );
}