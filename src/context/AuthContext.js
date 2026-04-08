import { supabase } from "@/services/supabaseClient";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined); // undefined = loading
  const [userData, setUserData] = useState(undefined); // undefined = loading
  const router = useRouter();

  useEffect(() => {
    let subscription;

    // Get current session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data?.session ?? null);
      setUserData(data?.session?.user ?? null);
    });

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUserData(session?.user);
      },
    );

    subscription = authListener.subscription;

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  if (session === undefined) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ session, userData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
