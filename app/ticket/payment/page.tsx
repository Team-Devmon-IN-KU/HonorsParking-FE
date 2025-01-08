import PaymentMethod from "@/app/payment/components/PaymentMethod";
import React from "react";
import TicketPaymentHeader from "./components/TicketPaymentHeader";
import TicketPaymentInfo from "./components/TicketPaymentInfo";
import PaymentTicketComponent from "@/app/payment/components/PaymentTicketComponent";
import AgreementBox from "./components/AgreementBox";

export default function page() {
  return (
    <div className="bg-[#f0f0f0] space-y-4 overflow-auto">
      <TicketPaymentHeader />
      <div className="space-y-10">
        <div className="px-6 space-y-8">
          <TicketPaymentInfo />
          <div className="space-y-4">
            <PaymentMethod />
            <PaymentTicketComponent />
          </div>
        </div>
        <div className="">
          <AgreementBox />
        </div>
      </div>
    </div>
  );
}
