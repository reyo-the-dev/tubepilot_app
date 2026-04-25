import ProtectedRoute from '@/components/common/ProtectedRoute/protectedRoute'
import CreateSlideScreen from '@/components/screens/slides/create-slide/create-slide'

import React from 'react'

const CreateSlidePage = () => {
  return (
    <ProtectedRoute>
      <CreateSlideScreen/>
    </ProtectedRoute>
  )
}

export default CreateSlidePage
