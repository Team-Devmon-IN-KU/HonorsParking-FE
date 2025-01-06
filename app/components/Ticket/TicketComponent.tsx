import React from "react";
import Image from "next/image";

export default function TicketComponent() {
  return (
    <div className="flex flex-col gap-4 bg-[#fff] rounded-[20px] p-4 px-6">
      <div className="flex flex-col">
        <span className="text-lg font-[700]">가입기념 50% 할인권</span>
        <span className="text-[#7E7F83] font-[500] text-[14px]">
          유효기간 : 2024년 12월 31일까지
        </span>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 bg-[#F1F6FF] rounded-[20px] p-2">
        <Image src="/src/icon/Clock.svg" alt="" width={20} height={20} />
        <div className="space-x-1 ">
          <span className="font-[500]">잔여 시간</span>
          <span className="font-[600]">24일 12시간 50분</span>
        </div>
      </div>
    </div>
  );
}
