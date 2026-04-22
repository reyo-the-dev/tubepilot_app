import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import SlidePostsList from "@/components/screens/slides/slide_series/slide_posts/slide_posts";
import React from "react";

const SlideSeriesDetailsPage = () => {
  return (
    <ProtectedRoute>
      <SlidePostsList />
    </ProtectedRoute>
  );
};

export default SlideSeriesDetailsPage;
