import { handleResponse } from "./defaultError";

export async function usersData(token: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/users/me`, {
    headers: { "x-auth-token": token },
  });
  return handleResponse(response).then((data: any) => data);
}

export async function register(data: {
  username: string;
  email: string;
  password: string;
  type: string;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/auth/register`,
    {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return handleResponse(response).then((data: any) => data);
}
