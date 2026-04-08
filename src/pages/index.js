import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session === undefined) return; // wait for session

    if (session) {
      router.replace("/playlist");
    } else {
      router.replace("/login");
    }
  }, [session]);

  return null;
};

export default Home;
