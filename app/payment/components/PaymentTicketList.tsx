import React from "react";
import PaymentTicket from "./PaymentTicket";

export default function PaymentTicketList() {
  return (
    <div className="flex flex-col gap-4">
      <PaymentTicket />
      <PaymentTicket />
      <PaymentTicket />
      <PaymentTicket />
      <PaymentTicket />
    </div>
  );
}
