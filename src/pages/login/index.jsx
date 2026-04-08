import LoginScreen from "@/components/screens/login/login";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const LoginPage = () => {
  const { session } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (session === undefined) return; // wait for session

    if (session) {
      router.replace("/playlist");
    }
  }, [session]);

  if (session === undefined) {
    return <div>Loading...</div>;
  }

  return <LoginScreen />;
};

export default LoginPage;
