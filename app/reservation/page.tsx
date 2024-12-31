import React from "react";
import ReservationList from "./components/ReservationList";
import ReservationHeader from "./components/ReservationHeader";
import FooterNav from "../common/FooterNav";
import ReservationSearchBar from "./components/ReservationSearchBar";

export default function page() {
  return (
    <div className="bg-[#f0f0f0] flex flex-col w-full pb-[12vh]">
      <ReservationHeader />
      <div className="px-6 w-full">
        <ReservationSearchBar />
        <div className="font-[700] text-lg mt-8 mb-6">예약 가능한 주차장</div>
        <ReservationList />
      </div>
      <FooterNav currentpage="parking" />
    </div>
  );
}
