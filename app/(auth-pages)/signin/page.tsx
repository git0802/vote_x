"use client";

import { FormMessage, Message } from "@/components/ui/form-message";
import { signInAction } from "@/functions/auth";
import { parseMessage } from "@/utils/utils";
import { Mail, ShieldUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { toast } from "sonner";

function SignInContent() {
  const searchParams = parseMessage(
    useSearchParams().get("type") as string
  ) as Message;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSignin() {
    if (!email || !password) {
      toast.error("Please submit the required fields.");
      return;
    }

    signInAction({
      email,
      password,
    });
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
        <h2 className="card-title flex items-center text-base-content">
          <ShieldUser className="text-info" />
          Sign in to your account
        </h2>
        <div className="flex items-end gap-1">
          <p className="text-base-content h-5.5 p-0">Don't have an account?</p>
          <Link href="/signup">
            <button className="btn btn-link h-6 p-0">Get started</button>
          </Link>
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

          <legend className="fieldset-legend">Password</legend>
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
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="flex items-center justify-between">
            <legend className="fieldset-legend">
              <input type="checkbox" className="toggle toggle-xs" />
              <p className="text-sm">Remember me</p>
            </legend>
            <Link href="/forgot-password">
              <button className="btn btn-link h-6 p-0 btn-sm">
                Forgot Password?
              </button>
            </Link>
          </div>

          <button
            className="btn btn-primary w-full mt-4"
            onClick={handleSignin}
          >
            Sign in
          </button>

          <button className="btn bg-white text-black border-[#e5e5e5] mb-4">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <FormMessage message={searchParams} />
        </fieldset>
      </div>
    </div>
  );
}

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
}
