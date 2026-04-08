import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session === undefined) return; // still loading

    if (!session) {
      router.replace("/login");
    }
  }, [session]);

  // Loading state
  if (session === undefined) {
    return <div>Loading...</div>;
  }

  if (session) {
    return children;
  }

  return null;
}
