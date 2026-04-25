import React, { useState } from "react";
import styles from "./login.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Google } from "react-bootstrap-icons";
import CustomInput from "@/components/ui/custom_input/custom_input";
import { toast } from "react-toastify";
import { supabase } from "@/services/supabaseClient";
import FONTS from "@/styles/fonts";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let authRes;

    try {
      if (isSignup) {
        authRes = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
        });
      } else {
        authRes = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });
      }

      if (authRes?.error) {
        toast.error(authRes.error.message)
      }
    } catch (error) {
      console.log(error);
      toast.error("error");
    }
  };

  return (
    <div className={styles.LoginScreen}>
      <CustomContainer>
        <div className={styles.wrap}>
          <div className={styles.right}>
            <div className={styles.imageOverlay}>
              <h3>Elevate your productivity</h3>
              <p>Join thousands of users managing their tasks effectively.</p>
            </div>
          </div>

          <div className={styles.left}>
            <div className={styles.loginForm}>
              <div className={`${styles.greet}`}>
                <h2 className={styles.logo}>Get Started</h2>
                <small
                className={FONTS.font2}
                >Sign in to your account</small>
              </div>
             

              <form className={styles.formContainer} onSubmit={handleSubmit}>
                <CustomInput
                  label="Email address"
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e, v) => {
                    setFormData((prev) => ({ ...prev, email: v }));
                  }}
                />
                <CustomInput
                  label="Password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e, v) => {
                    setFormData((prev) => ({ ...prev, password: v }));
                  }}
                />

                {isSignup && (
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                  />
                )}

                <div className={styles.options}>
                  <label className={styles.remember}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  {!isSignup && (
                    <a href="#" className={styles.forgot}>
                      Forgot password?
                    </a>
                  )}
                </div>

                <CustomButton variant={1} fullWidth type="submit">
                  {isSignup ? "Sign Up" : "Sign In"}
                </CustomButton>
              </form>

               {!isSignup && (
                <div className={styles.oAuth}>
                  
                  <div className={styles.divider}>
                    <span
                    className={FONTS.font2}
                    >or sign in with</span>
                  </div>
                  <CustomButton variant={3} fullWidth

                  >
                    Continue with Google <Google />
                  </CustomButton>

                </div>
              )}

              <div className={styles.signupAction}>
                <p>
                  {isSignup
                    ? "Already have an account?"
                    : "Don't have an account?"}{" "}
                  <a href="#" onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? "Sign In" : "Sign up"}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default LoginScreen;
