import React from 'react'
import MyPagePaymentHeader from './MyPagePaymentHeader'
import MyPagePaymentComponent from './MyPagePaymentComponent'

export default function MyPagePayment() {
  return (
    <div className='px-6 mt-6 space-y-3'>
      <MyPagePaymentHeader />
      <MyPagePaymentComponent />
    </div>
  )
}
