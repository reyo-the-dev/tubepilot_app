import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import PlaylistDetailsScreen from "@/components/screens/playlist/playlist_details/playlist_details";

const PlaylistDetailsPage = () => {
  return (
    <ProtectedRoute>
      <PlaylistDetailsScreen />
    </ProtectedRoute>
  );
};

export default PlaylistDetailsPage;
