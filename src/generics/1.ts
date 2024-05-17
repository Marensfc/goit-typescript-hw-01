import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get<T>(url);
    const result: T = response.data;
    return result;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${(error as Error).message}`);
  }
}
