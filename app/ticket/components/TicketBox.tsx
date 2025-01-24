"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function TicketBox() {
  const router = useRouter();
  const handlePament = () => {
    router.push("/ticket/payment");
  };
  return (
    <div className="rounded-[1.25rem] bg-white p-4">
      <div className="flex justify-between items-center">
        <span className="text-[17px] font-[700] text-[#2a2a2a]">
          왕십리 도보 10분 정기권
        </span>
        <Image src="/src/icon/Bookmark2.svg" alt="" width={22} height={24} />
      </div>
      <div className="flex gap-2">
        <Image
          src="/src/icon/TicketParking.svg"
          alt=""
          width={16}
          height={20}
        />
        <span className="text-md font-[500] text-[#7E7F83]">
          한양대학교 주차장
        </span>
      </div>
      <div className="flex gap-2">
        <Image src="/src/icon/TicketTicket.svg" alt="" width={16} height={20} />
        <span className="text-md font-[500] text-[#7E7F83]">
          당일권(월 ~ 금)
        </span>
      </div>
      <button
        className="bg-[#093AEE] rounded-[999px] mt-6 w-full p-3 flex gap-2 items-center justify-center relative"
        onClick={handlePament}
      >
        <span className="line-through text-white text-[13px] font-[400]">
          3,000원
        </span>
        <div className="space-x-1">
          <span className="text-white text-md font-[700]">5,000원</span>
          <span className="text-white text-md font-[500]">구매하기</span>
        </div>
        <div className="absolute bg-[#FAF8F8] rounded-[6px] p-1 px-4 text-[#093AEE] font-[700] text-[14px] right-6 bottom-[80%]">
          50% 할인
        </div>
      </button>
    </div>
  );
}
