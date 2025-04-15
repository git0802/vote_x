"use server";

import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

interface UserDataProps {
  username?: string;
  email: string;
  password: string;
}

export const signInAction = async (userData: UserDataProps) => {
  const { email, username, password } = userData;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/signin", error.message);
  }

  return redirect("/");
};

export const singUpAction = async (userData: UserDataProps) => {
  console.log("UserData", userData);

  const { email, username, password } = userData;

  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/signup",
      "Email, and password are required"
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/singup", error.message);
  } else {
    return encodedRedirect(
      "success",
      "/signup",
      "Thanks for signing up! Please check your email to confirm your account."
    );
  }
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/signin");
};

export const forgotPasswordAction = async ({
  email,
  callbackUrl,
}: {
  email: string;
  callbackUrl?: string;
}) => {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

export const resetPasswordAction = async (password: string) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  console.log(error);

  if (error) {
    encodedRedirect("error", "/reset-password", "Password update failed");
  }

  encodedRedirect("success", "/reset-password", "Password updated");
};
