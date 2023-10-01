import { handleResponse } from "./defaultError";

export async function login(email: string, password: string) {
  const data = {
    email,
    password,
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/auth/login`,
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
