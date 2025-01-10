"use client";

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function MyMenu() {
  const router = useRouter();
  
  const handleNavigate = () => {
    router.push("/notice")
  }

  const navigatePayInfo = () => {
    router.push("/payment-info")
  }

  return (
    <div className="px-6 w-full space-y-4">
      <span className="font-[700] text-[1.25rem]">마이메뉴</span>
      <div className="flex flex-col gap-3 w-full">
        <button className="flex justify-between items-center bg-white rounded-[12px] p-4" onClick={handleNavigate}>
          <span className="font-[600] text-[#2A2A2A] text-[17px]">알림</span>
          <MdKeyboardArrowRight size={20} />
        </button>
        <button className="flex justify-between items-center bg-white rounded-[12px] p-4" onClick={navigatePayInfo}>
          <span className="font-[600] text-[#2A2A2A] text-[17px]">
            결제 정보
          </span>
          <MdKeyboardArrowRight size={20} />
        </button>
        <button className="flex justify-between items-center bg-white rounded-[12px] p-4">
          <span className="font-[600] text-[#2A2A2A] text-[17px]">
            보유중인 이용권
          </span>
          <MdKeyboardArrowRight size={20} />
        </button>
        <button className="flex justify-between items-center bg-white rounded-[12px] p-4">
          <span className="font-[600] text-[#2A2A2A] text-[17px]">
            주차장 이용내역
          </span>
          <MdKeyboardArrowRight size={20} />
        </button>
        <button className="flex justify-between items-center bg-white rounded-[12px] p-4">
          <span className="font-[600] text-[#2A2A2A] text-[17px]">
            문의하기
          </span>
          <MdKeyboardArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
