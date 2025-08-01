import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function loginUser(role, data) {
  const res = await fetch(`http://localhost:8000/api/${role}/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!res.ok) throw new Error("Login failed");
  return res.json();
}
export async function registerUser(role, data) {
  const res = await fetch(`http://localhost:8000/api/${role}/signup/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    console.error("Backend error:", err); // log full error
    throw new Error(err?.message || JSON.stringify(err));
  }

  return res.json();
}
