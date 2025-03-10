"use client";
import React, { PropsWithChildren } from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ children }: PropsWithChildren) => {
  const { pending } = useFormStatus();

  return <Button type="submit" aria-disabled={pending} className="bg-blue-500 text-white p-2 rounded-lg">
    {pending ? "Submitting..." : children}
  </Button>;
};

export default SubmitButton;
