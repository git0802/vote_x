import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ForgotPassword() {
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
          <input
            type="email"
            className="input validator"
            required
            placeholder="email"
          />

          <button className="btn btn-primary mt-4">Send reset email</button>
          <Link href="/signin">
            <button className="btn btn-ghost w-full">
              <ChevronLeft />
              Return to sign in
            </button>
          </Link>
        </fieldset>
      </div>
    </div>
  );
}
