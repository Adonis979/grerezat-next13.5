import { handleResponse } from "./defaultError";

export async function getSubscriptions() {
  const oneDay = 3600 * 24;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/business/products`,
    {
      next: { revalidate: oneDay },
    }
  );
  return handleResponse(response).then((data: any) => data);
}
