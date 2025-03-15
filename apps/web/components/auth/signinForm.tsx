"use client";
import React, { useState, useActionState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../ui/SubmitButton";
import { signIn } from "@/lib/auth";
import Link from "next/link";

const SigninForm = () => {
  const [state, action] = useActionState(signIn, undefined);
  const [formData, setFormData] = useState({ email: "", password: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Prevent empty submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!formData.email || !formData.password) {
      e.preventDefault(); // Stop form submission
    }
  };

  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className="flex flex-col w-80 gap-4">
        {state?.message && <p className="text-red-500">{state.message}</p>}

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="JohnDoe@example.com"
            className="w-full mt-1"
            value={formData.email}
            onChange={handleChange}
          />
          {state?.error?.email && <p className="text-red-500">{state.error.email}</p>}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="************"
            className="w-full mt-1"
            value={formData.password}
            onChange={handleChange}
          />
          {state?.error?.password && <p className="text-red-500">{state.error.password}</p>}
        </div>

        <Link href="#" className="text-sm text-muted-foreground hover:underline">
          Forget your password?
        </Link>

        <SubmitButton>
          Sign In
        </SubmitButton>
      </div>
    </form>
  );
};

export default SigninForm;
