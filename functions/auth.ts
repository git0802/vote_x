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
  const origin = (await headers()).get("origin") || "http://localhost:3000";

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
