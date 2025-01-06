import React from 'react'
import FooterNav from '../common/FooterNav'
import NaverMapComponent from './components/NaverMapComponent'

export default function page() {
  return (
    <div>
      <NaverMapComponent />
      <FooterNav currentpage='ticket'/>
    </div>
  )
}
