import axios from "axios";

async function fetchData(url: string): Promise<unknown> | never {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
