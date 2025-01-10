import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

export default function CarNumberInput() {
  return (
    <div className="bg-white rounded-[1rem] p-4 space-y-3">
      <div className="flex gap-2">
        <Image src="/src/icon/Information.svg" alt="" width={24} height={24} />
        <span className="font-[700] text-[17px] text-[#2a2a2a]">차량 번호</span>
      </div>
      <input className="flex justify-between items-center rounded-[0.75rem] bg-[#F0F0F0] w-full p-4 placeholder:text-[#2a2a2a]" placeholder='33나 3333'/>
    </div>
  )
}
