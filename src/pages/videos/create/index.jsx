import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import CreateVideoScreen from "@/components/screens/video/create_video/create_video";
import React from "react";

const CreateVideosPage = () => {
  return (
    <ProtectedRoute>
      <CreateVideoScreen />
    </ProtectedRoute>
  );
};

export default CreateVideosPage;
