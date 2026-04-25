import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import PostDetails from "@/components/screens/slides/post_details/post_details";
import React from "react";

const SlidePostDetailsPage = () => {
  return (
    <ProtectedRoute>
      <PostDetails />
    </ProtectedRoute>
  );
};

export default SlidePostDetailsPage;
