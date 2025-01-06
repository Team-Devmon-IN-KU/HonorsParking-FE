import React from 'react'
import FooterNav from '../common/FooterNav'
import TicketHeader from './components/TicketHeader'
import TicketComponentHeader from './components/TicketComponentHeader'

export default function page() {
  return (
    <div className='bg-[#f0f0f0]'>
      <TicketHeader />
      <TicketComponentHeader />
      <FooterNav currentpage='ticket'/>
    </div>
  )
}