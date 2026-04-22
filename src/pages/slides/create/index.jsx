import ProtectedRoute from "@/components/common/ProtectedRoute/protectedRoute";
import CreateSeriesScreen from "@/components/screens/slides/create_series/create_series";

const SeriesCreatePage = () => {
  return (
    <ProtectedRoute>
      <CreateSeriesScreen />
    </ProtectedRoute>
  );
};

export default SeriesCreatePage;
