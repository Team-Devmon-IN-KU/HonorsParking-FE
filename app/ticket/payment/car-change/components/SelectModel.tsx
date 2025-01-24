import Image from "next/image";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function SelectModel() {
  return (
    <div className="bg-white rounded-[1rem] p-4 space-y-3">
      <div className="flex gap-2">
        <Image src="/src/icon/OnHome.svg" alt="" width={24} height={24} />
        <span className="font-[700] text-[17px] text-[#2a2a2a]">차종</span>
      </div>
      <button className="flex justify-between items-center rounded-[0.75rem] bg-[#F0F0F0] w-full p-4">
        <span className="text-[#ACAFB3] font-[500] text-[17px]">차종을 선택해주세요</span>
        <MdKeyboardArrowRight color="#4C4D4F" size={24}/>
      </button>
    </div>
  );
}
