"use client";

import React from "react";
import NoticeComponent from "./NoticeComponent";
import { useState } from "react";

interface buttonState {
  buttonSelected: "Default" | "InOut" | "Reservation" | "Payment";
}

export default function Notice() {
  const [buttonSelected, setButtonSelected] = useState<buttonState>({
    buttonSelected: "Default",
  });

  const handleButtonSelect = (
    state: "Default" | "InOut" | "Reservation" | "Payment"
  ) => {
    setButtonSelected({ buttonSelected: state });
  };

  let backgroundClass = "";
  switch (buttonSelected.buttonSelected) {
    case "Default":
      backgroundClass = "left-[1%]";
      break;
    case "InOut":
      backgroundClass = "left-[25%]";
      break;
    case "Reservation":
      backgroundClass = "left-[50%]";
      break;
    case "Payment":
      backgroundClass = "left-[74%]";
      break;
  }

  return (
    <div className="space-y-4">
      <span className="font-[700] text-[1.25rem]">이용권</span>
      <div className="relative grid grid-cols-4 rounded-[999px] w-full bg-white p-3 px-1">
        <button
          className={`text-md z-30 font-[500] ${buttonSelected.buttonSelected === "Default" ? "text-white" : "text-[#2A2A2A]"}`}
          onClick={() => handleButtonSelect("Default")}
        >
          전체
        </button>
        <button
          className={`text-md z-30 font-[500] ${buttonSelected.buttonSelected === "InOut" ? "text-white" : "text-[#2A2A2A]"}`}
          onClick={() => handleButtonSelect("InOut")}
        >
          입/출차
        </button>
        <button
          className={`text-md z-30 font-[500] ${buttonSelected.buttonSelected === "Reservation" ? "text-white" : "text-[#2A2A2A]"}`}
          onClick={() => handleButtonSelect("Reservation")}
        >
          예약
        </button>
        <button
          className={`text-md z-30 font-[500] ${buttonSelected.buttonSelected === "Payment" ? "text-white" : "text-[#2A2A2A]"}`}
          onClick={() => handleButtonSelect("Payment")}
        >
          결제
        </button>
        <div
          className={`absolute bg-[#2A2A2A] rounded-[999px] w-[25%] h-[90%] top-1/2 -translate-y-1/2 z-10 transform-all duration-300 ${backgroundClass}`}
        ></div>
      </div>
      <div className="space-y-3">
        <NoticeComponent
          title="입/출차 알림"
          message="8시 50분에 A타워에서 출차하셨습니다."
          date="2024.12.03"
        />
        <NoticeComponent
          title="입/출차 알림"
          message="8시 50분에 A타워에서 출차하셨습니다."
          date="2024.12.03"
        />
        <NoticeComponent
          title="입/출차 알림"
          message="8시 50분에 A타워에서 출차하셨습니다."
          date="2024.12.03"
        />
      </div>
    </div>
  );
}
