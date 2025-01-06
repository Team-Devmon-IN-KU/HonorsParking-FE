import React from "react";
import TicketComponent from "./TicketComponent";

export default function TicketComponentHeader() {
  return (
    <div>
      <div className="flex items-center justify-between px-6">
        <span className="text-[1.25rem] font-[700] text-[#2a2a2a]">이용권 구매</span>
        <div className="flex gap-2">
            <button>거리순</button>
            <button>가격순</button>
        </div>
      </div>
      <TicketComponent />
    </div>
  );
}
