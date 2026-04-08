import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import CreatePlaylistScreen from "@/components/screens/playlist/create/create_playlist";

const PlaylistCreatePage = () => {
  return (
    <ProtectedRoute>
      <CreatePlaylistScreen />
    </ProtectedRoute>
  );
};

export default PlaylistCreatePage;
