import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import VideoDetailsScreen from "@/components/screens/video/video_details/video_details";

const VideoDetailsPage = () => {
  return (
    <ProtectedRoute>
      <VideoDetailsScreen />;
    </ProtectedRoute>
  );
};

export default VideoDetailsPage;
