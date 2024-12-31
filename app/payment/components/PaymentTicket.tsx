import React from 'react'
import Image from 'next/image'

export default function PaymentTicket() {
  return (
    <div className='w-full bg-white p-5 rounded-[20px] flex items-center gap-2'>
      <div className='rounded-full bg-[#F6F6F6] w-[45px] h-[45px] flex items-center justify-center'>
        <Image src="/src/icon/TicketNotOutline.svg" alt='' width={20} height={24}/>
      </div>
      <div className='flex flex-col'>
        <span className='textmd font-[500] text-black'>회원가입 기념 50% 할인권</span>
        <span className='text-[#7E7F83] font-[500] text-[14px]'>1일 후에 만료됨</span>
      </div>
    </div>
  )
}
