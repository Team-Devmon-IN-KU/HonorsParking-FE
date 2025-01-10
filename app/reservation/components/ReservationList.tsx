import React from "react";
import ReservationDetailComponents from "./ReservationDetailComponent";

export default function ReservationList() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ReservationDetailComponents />
      <ReservationDetailComponents />
      <ReservationDetailComponents />
      <ReservationDetailComponents />
      <ReservationDetailComponents />
    </div>
  );
}