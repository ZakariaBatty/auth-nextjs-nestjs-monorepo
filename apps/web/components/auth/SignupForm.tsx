"use client"
import React, { useActionState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../ui/SubmitButton";
import { signUp } from "@/lib/auth";

const SignupForm = () => {
  const [state, action] = useActionState(signUp, undefined)

  return (
    <form action={action}>
      <div className="flex flex-col w-80 gap-4">
        {state?.message && (<p className="text-red-500">{state.message}</p>)}
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            className="w-full mt-1"
          />
        </div>
        {state?.error?.name && (<p className="text-red-500">{state.error.name}</p>)}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="JohnDoe@example.com"
            className="w-full mt-1"
          />
        </div>
        {state?.error?.email && (<p className="text-red-500">{state.error.email}</p>)}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="************"
            className="w-full mt-1"
          />
        </div>
        {state?.error?.password && (
          <div className="text-red-500 text-sm">
            <p className="text-muted-foreground pb-2">passwprd must</p>
            <ul>
              {state.error.password.map((error) => (
                <li className="pb-1" key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <SubmitButton>
          Sign Up
        </SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
