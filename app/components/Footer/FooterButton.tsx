import React from 'react'

export default function FooterButton() {
  return (
    <div className='flex flex-row gap-2 p-8 text-[#FFFFFF] font-[300]'>
      <button className=''>이용약관</button>
      <span className='text-[#ACAFB3]'>|</span>
      <button>개인정보처리방침</button>
      <span className='text-[#ACAFB3]'>|</span>
      <button>공지사항</button>
    </div>
  )
}
