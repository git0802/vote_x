"use client";

import { FormMessage, Message } from "@/components/ui/form-message";
import { forgotPasswordAction } from "@/functions/auth";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function parseMessage(input?: string): Message | null {
  if (!input) {
    return null;
  } else {
    const [key, value] = input.split("=");

    switch (key) {
      case "success":
        return { success: value };
      case "error":
        return { error: value };
      case "message":
        return { message: value };
      default:
        console.error("Invalid message format");
        return null;
    }
  }
}

export default function ForgotPassword() {
  const searchParams = parseMessage(
    useSearchParams().get("type") as string
  ) as Message;

  const [email, setEmail] = useState<string>("");

  function handleForgotPassword() {
    if (!email) {
      toast.error("Please submit the required fields.");
      return;
    }

    forgotPasswordAction({ email });
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm mt-20">
      <figure>
        <Image
          src="https://picsum.photos/id/26/400/500"
          alt="Album"
          width={400}
          height={500}
        />
      </figure>
      <div className="card-body items-center w-[370px] justify-center">
        <h2 className="card-title ">Forgot your password?</h2>
        <div className="flex">
          <p className="text-base-content text-center text-pretty px-2">
            Please enter the email address associated with your account and
            we'll email you a link to reset your password.
          </p>
        </div>

        <fieldset className="fieldset w-full mt-4">
          <legend className="fieldset-legend">Email</legend>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button
            className="btn btn-primary mt-4"
            onClick={handleForgotPassword}
          >
            Send reset email
          </button>
          <Link href="/signin">
            <button className="btn btn-ghost w-full">
              <ChevronLeft />
              Return to sign in
            </button>
          </Link>
          <FormMessage message={searchParams} />
        </fieldset>
      </div>
    </div>
  );
}
