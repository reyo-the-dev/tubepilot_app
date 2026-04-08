import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import VideosListScreen from "@/components/screens/video/videos_list/videos_list";

import React from "react";

const VideosListPage = () => {
  return (
    <ProtectedRoute>
      <VideosListScreen/>
    </ProtectedRoute>
  );
};

export default VideosListPage;
