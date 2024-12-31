import React from 'react'
import FooterButton from './FooterButton'

export default function Footer() {
  return (
    <div className='bg-[#2A2A2A] flex flex-col pb-[12vh]'>
      <FooterButton />
      <div className='text-[#C5C8CB] text-sm font-[300] flex flex-col px-8 gap-1'>
        <span>아너스코리아 | 사업자 번호 123-45-67890</span>
        <span>서울 강남구 학동로00길 00, A타워 1층 | 1588-1599</span>
        <span>Copyright(c) HONORS KOREA All rights reserved.</span>
      </div>
    </div>
  )
}
