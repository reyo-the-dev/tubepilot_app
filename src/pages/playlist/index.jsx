import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import MyPlaylistsScreen from "@/components/screens/playlist/my_playlists/my_playlists";

const MyPlaylistsPage = () => {
  return (
    <ProtectedRoute>
      <MyPlaylistsScreen />
    </ProtectedRoute>
  );
};

export default MyPlaylistsPage;
