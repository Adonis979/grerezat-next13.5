export async function handleResponse<T>(response: any): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== undefined) {
      throw new Error(JSON.stringify(data.errors));
    }
    throw new Error(JSON.stringify(data), { cause: response.status });
  }

  return data as T;
}
