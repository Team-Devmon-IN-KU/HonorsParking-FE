import React from 'react'
import FooterNav from '../common/FooterNav'
import TicketHeader from './components/TicketHeader'
import TicketComponentHeader from './components/TicketComponentHeader'

export default function page() {
  return (
    <div className='bg-[#f0f0f0] h-[100vh] space-y-6'>
      <TicketHeader />
      <TicketComponentHeader />
      <FooterNav currentpage='ticket'/>
    </div>
  )
}