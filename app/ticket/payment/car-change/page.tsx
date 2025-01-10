import React from "react";
import CarChangeHeader from "./components/CarChangeHeader";
import SelectModel from "./components/SelectModel";
import CarNumberInput from "./components/CarNumberInput";
import ChangeButton from "./components/ChangeButton";

export default function page() {
  return (
    <div className="bg-[#f0f0f0] h-[100vh]">
      <CarChangeHeader />
      <div className="font-[700] text-[#2a2a2a] text-[1.25rem] p-6">
        고객님의 차량이 변경됩니다.
      </div>
      <div className="flex flex-col gap-6 px-6 mt-2">
        <SelectModel />
        <CarNumberInput />
      </div>
      <ChangeButton />
    </div>
  );
}
