import SigninForm from "@/components/auth/signinForm";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>

      {/* sign up form */}
      <SigninForm />

      {/* sign in link */}
      <div className="flex justify-between text-sm mt-4">
        <p className="flex justify-between text-sm text-muted-foreground">
          Don&apos;t have an account ? {"  "}
          <Link href={"/auth/signup"} className="underline ml-2 hover:text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
