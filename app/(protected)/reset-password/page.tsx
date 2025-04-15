"use client";

import { FormMessage, Message } from "@/components/ui/form-message";
import { resetPasswordAction } from "@/functions/auth";
import { parseMessage } from "@/utils/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "sonner";

function ResetPasswordContent() {
  const searchParams = parseMessage(
    useSearchParams().get("type") as string
  ) as Message;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  function handleResetPassword() {
    if (!password || !confirmPassword) {
      toast.error("Password and confirm password are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    resetPasswordAction(password);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 shadow-sm w-96">
        <div className="card-body items-center justify-center">
          <h2 className="card-title">Reset Password</h2>
          <p className="text-base-content text-center text-pretty px-2">
            Please enter your new password below.
          </p>

          <fieldset className="fieldset w-full mt-4">
            <legend className="fieldset-legend">New Password</legend>
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
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <legend className="fieldset-legend">Confirm Password</legend>
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
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>

            <button
              className="btn btn-primary mt-4"
              onClick={handleResetPassword}
            >
              Change Password
            </button>
            <Link href="/">
              <button className="btn btn-ghost w-full mb-4">
                <ChevronLeft />
                Return to dashboard
              </button>
            </Link>
            <FormMessage message={searchParams} />
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
