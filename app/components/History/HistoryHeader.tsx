import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function HistoryHeader() {
  return (
    <div className="flex flex-row justify-between">
      <span className="font-[700] text-[22px] text-[#2A2A2A]">최근 사용 내역</span>
      <button className="flex flex-row gap-1 items-center justify-center">
        <span className="text-[#404041]">자세히보기</span>
        <IoIosArrowForward className="text-[#404041]"/>
      </button>
    </div>
  );
}
