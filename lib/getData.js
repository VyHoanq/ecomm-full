export async function getData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endpoint}`);
    }

    const data = await response.json();
    return data || [];

  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    return [];
  }
}
