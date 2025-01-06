import React from 'react'
import UnpaidHistoryHeader from './UnpaidHistoryHeader'
import UnpaidHistoryComponent from './UnpaidHistoryComponent'

export default function UnpaidHistory() {
  return (
    <div className="w-full px-6 flex flex-col gap-4">
        <UnpaidHistoryHeader />
        <UnpaidHistoryComponent />
        <UnpaidHistoryComponent />
    </div>
  )
}
