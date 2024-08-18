import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex justify-start px-10 size-full max-sm:px-6">
      <AuthForm type="sign-in" />
    </section>
  );
};

export default SignIn;
