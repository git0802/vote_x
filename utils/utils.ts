import { Message } from "@/components/ui/form-message";
import { redirect } from "next/navigation";

export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string
) {
  return redirect(`${path}?type=${type}=${encodeURIComponent(message)}`);
}

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
