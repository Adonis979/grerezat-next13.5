import { handleResponse } from "./defaultError";

export async function checkout(
  token: string,
  data: any,
  paymentSelected: string
) {
  let payment;
  if (paymentSelected === "0") {
    payment = "paypal";
  } else payment = "stripe";
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/payment/${payment}`,
    {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(data),
    }
  );
  return handleResponse(response).then((data: any) => data);
}

export async function getTransactionStatus(
  searchParams: any,
  token: any,
  subscription: any
) {
  const data = {
    payerId: searchParams.PayerID,
    paymentId: searchParams.paymentId,
    item_id: subscription,
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/payment/paypal/status`,
    {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(data),
    }
  );
  return handleResponse(response).then((data: any) => data);
}
