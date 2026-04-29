import ProtectedRoute from '@/components/common/ProtectedRoute/protectedRoute'
import CreateHistorySlides from '@/components/screens/slides/create-history-slides/create-history-slides'
import CreateSlideScreen from '@/components/screens/slides/create-slide/create-slide'

import React from 'react'

const CreateSlidePage = () => {
  return (
    <ProtectedRoute>
      <CreateHistorySlides/>
    </ProtectedRoute>
  )
}

export default CreateSlidePage
