const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface LoginPayload {
  identifier: string;
  password: string;
  role: "STUDENT" | "TEACHER" | "ADMIN";
}

export const loginUser = async (
  payload: LoginPayload
) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};