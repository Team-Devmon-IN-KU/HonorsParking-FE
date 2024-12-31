import React from "react";
import HistoryHeader from "./HistoryHeader";
import HistoryComponents from "./HistoryComponents";

export default function History() {
  return (
    <div className="w-full p-6 flex flex-col gap-4">
        <HistoryHeader />
        <HistoryComponents />
        <HistoryComponents />
    </div>
  );
}
