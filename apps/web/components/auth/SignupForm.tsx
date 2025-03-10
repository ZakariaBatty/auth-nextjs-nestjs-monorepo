import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import SubmitButton from "../ui/SubmitButton";

const SignupForm = () => {
  return (
    <form>
      <div className="flex flex-col w-80 gap-4">
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
        <SubmitButton>
          Sign Up
        </SubmitButton>
      </div>
    </form>
  );
};

export default SignupForm;
