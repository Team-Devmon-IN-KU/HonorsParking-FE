"use client";

import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function AgreementBox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="flex gap-2 w-full items-center justify-center pb-[15vh]">
      {isChecked ? (
        <div
          className="bg-[#093AEE] rounded-full w-[24px] h-[24px] flex items-center justify-center"
          onClick={handleCheckbox}
        >
          <FaCheck color="white" size={12} />
        </div>
      ) : (
        <div
          className="w-[24px] h-[24px] rounded-full bg-white"
          onClick={handleCheckbox}
        ></div>
      )}
      <span>구매 유의사항을 확인했으며, 결제에 동의합니다.</span>
    </div>
  );
}
