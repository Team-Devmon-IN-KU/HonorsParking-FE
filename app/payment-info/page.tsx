import React from "react";
import InfoHeader from "./components/InfoHeader";
import CardCarousel from "./components/CardCarousel";
import History from "../components/History/History";
import UnpaidHistory from "./components/UnpaidHistory";

export default function page() {
  return (
    <div className="bg-[#f0f0f0] pb-[1.25rem] w-full space-y-4">
      <InfoHeader />
      <CardCarousel />
      <History />
      <UnpaidHistory />
    </div>
  );
}
