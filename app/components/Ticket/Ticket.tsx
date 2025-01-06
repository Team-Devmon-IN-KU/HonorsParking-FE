import React from 'react'
import TicektHeader from './TicektHeader'
import TicketSelectButton from './TicketSelectButton'
import TicketComponent from './TicketComponent'

export default function Ticket() {
  return (
    <div className="px-6 flex flex-col w-full gap-4">
      <TicektHeader />
      <TicketSelectButton />
      <TicketComponent />
      <TicketComponent />
    </div>
  )
}
