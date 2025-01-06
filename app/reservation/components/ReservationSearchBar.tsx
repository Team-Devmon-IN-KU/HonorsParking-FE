import React from "react";
import Image from "next/image";

export default function ReservationSearchBar() {
  return (
    <div className="w-full flex flex-row bg-white py-4 px-3 rounded-[12px] items-center gap-1">
      <Image src="/src/icon/Search.svg" alt="" width={24} height={24} />
      <input
        className="focus:outline-none"
        placeholder="주소 또는 주차장 이름 검색"
        type="text"
      />
    </div>
  );
}
