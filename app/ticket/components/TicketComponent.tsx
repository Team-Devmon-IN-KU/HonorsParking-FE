"use client";

import React from "react";
import { useState } from "react";
import TicketBox from "./TicketBox";

export default function TicketComponent() {
  const [buttonSelected, setButtonSelected] = useState<boolean>(false);

  const handleSubcriptionSelect = () => {
    setButtonSelected(false);
  };

  const handleDiscountSelect = () => {
    setButtonSelected(true);
  };
  return (
    <div className="px-6 space-y-4">
      <div className="bg-[#f8f8f8] rounded-[999px] w-full grid grid-cols-2 py-4 relative">
        <button
          className={`z-10 font-[500] text-[17px] ${
            !buttonSelected ? "text-white" : "text-[#2a2a2a]"
          }`}
          onClick={handleSubcriptionSelect}
        >
          정기권
        </button>
        <button
          className={`z-10 font-[500] text-[17px] ${
            buttonSelected ? "text-white" : "text-[#2a2a2a]"
          }`}
          onClick={handleDiscountSelect}
        >
          할인권
        </button>
        <div
          className={`z-0 absolute bg-[#2A2A2A] h-[90%] w-[50%] rounded-[999px] top-1/2 -translate-y-1/2 transform-all duration-300 ${
            buttonSelected ? "left-[49%]" : "left-[1%]"
          }`}
        ></div>
      </div>
      <div className="space-y-3">
        <TicketBox />
        <TicketBox />
        <TicketBox />
      </div>
    </div>
  );
}
