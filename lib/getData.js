// export async function getData(endpoint) {
//     try {
//       const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//       const response = await fetch(`${baseUrl}/api/${endpoint}`, {
//         cache: "no-store",
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
export async function getData(endpoint) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
      throw new Error("Base URL is not defined in environment variables.");
    }
    const response = await fetch(`${baseUrl}/api/${endpoint}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Or return null if you prefer
  }
}
