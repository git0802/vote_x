import { redirect } from "next/navigation";

export function encodeRedirect(
  type: "error" | "success",
  path: string,
  message: string
) {
  return redirect(`${path}?type=${type}=${encodeURIComponent(message)}`);
}
