import React from "react";

export default function TicketSelectButton() {
  return (
    <div className="relative w-full bg-[#F6F6F6] rounded-[999px] grid grid-cols-2 p-4 gap-6">
      <div className="absolute bg-[#093AEE] w-[48%] h-[75%] transform top-1/2 -translate-y-1/2 left-2 rounded-[999px] z-0"></div>
      <button className="relative font-[400] text-md z-1 text-white">정기권</button>
      <button className="relative font-[400] text-md z-1">할인권</button>
    </div>
  );
}
