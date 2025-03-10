import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

      {/* sign up form */}
      <SignupForm />

      {/* sign in link */}
      <div className="flex justify-between text-sm mt-4">
        <p className="flex justify-between text-sm">
          Already have an account ? {"  "}
          <Link href={"/auth/signin"} className="underline ml-2 hover:text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
