import React from "react";
import ReservationHeader from "./ReservationHeader";
import ReservationComponents from "./ReservationComponent";

export default function Reservation() {
  return (
    <div className="px-6 flex flex-col w-full gap-4">
      <ReservationHeader />
      <div className="flex flex-row overflow-x-auto w-full gap-2 scrollbar-hide">
        <div className="flex flex-shrink-0">
          <ReservationComponents />
        </div>
        <div className="flex flex-shrink-0">
          <ReservationComponents />
        </div>
      </div>
    </div>
  );
}
