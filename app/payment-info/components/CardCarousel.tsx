import React from "react";

export default function CardCarousel() {
  return (
    <div className="space-y-4 flex flex-col w-full">
      <span className="font-[700] text-[1.25rem] text-[#2a2a2a] px-6 w-full">
        등록된 카드
      </span>
      <div className="relative h-[25vh] w-full flex items-center justify-center">
        <div className="absolute rounded-[1.25rem] bg-white w-[90%] h-[200px] flex items-center justify-center bottom-[15px]">
          <span>카드 4</span>
        </div>
        <div className="absolute rounded-[1.25rem] bg-black w-[90%] h-[200px] flex items-center justify-center bottom-[10px]">
          <span className="text-white">카드 3</span>
        </div>
        <div className="absolute rounded-[1.25rem] bg-blue-500 w-[90%] h-[200px] flex items-center justify-center bottom-[5px]">
          <span className="text-white">카드 2</span>
        </div>
        <div className="absolute rounded-[1.25rem] bg-gray-500 w-[90%] h-[200px] flex items-center justify-center bottom-0">
          <span className="text-white">카드 1</span>
        </div>
      </div>
      <div className="flex gap-1 items-center justify-center py-2">
        <div className="w-8 h-2 rounded-[999px] bg-[#315DFB]"></div>
        <div className="w-2 h-2 rounded-[999px] bg-[#C5C8CB]"></div>
        <div className="w-2 h-2 rounded-[999px] bg-[#C5C8CB]"></div>
        <div className="w-2 h-2 rounded-[999px] bg-[#C5C8CB]"></div>
      </div>
      <div className="w-full px-6">
        <button className="p-3 bg-[#093AEE] text-white rounded-[999px] w-full">
          카드 추가하기
        </button>
      </div>
    </div>
  );
}
