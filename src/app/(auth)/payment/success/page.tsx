import { getTransactionStatus } from "@/app/lib/api-requests/checkout";
import { cookies } from "next/headers";

async function apiCall(searchParams: any, token: any, subscription: any) {
  try {
    const result = await getTransactionStatus(
      searchParams,
      token,
      subscription
    );
    return result;
  } catch (error) {
    console.log(error);
  }
}

const Success = async ({ searchParams }: any) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  const subscription = cookieStore.get("subscription");
  console.log(token);
  const result = apiCall(searchParams, token, subscription);
  console.log(result);
  return <h1>Success</h1>;
};

export default Success;
