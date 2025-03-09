import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

      {/* sign up form */}
      <form className="flex flex-col w-full gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Sign Up
        </button>
      </form>

      {/* sign in link */}
      <div className="flex justify-between text-sm mt-4">
        <p className="flex justify-between text-sm">
          Already have an account?{" "}
          <Link href={"/auth/signin"} className="underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
