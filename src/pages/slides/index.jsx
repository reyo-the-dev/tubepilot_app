import ProtectedRoute from '@/components/common/ProtectedRoute/protectedRoute'
import SlideSeries from '@/components/screens/slides/slide_series/slide_series'
import React from 'react'

const SlidesPage = () => {
  return (
    <ProtectedRoute>
        <SlideSeries/>
    </ProtectedRoute>
  )
}

export default SlidesPage
