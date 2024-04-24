const BASE_URL = process.env.NEXTAUTH_URL + "/api/products";

export async function GetProducts() {
  try {
    // const { api } = params
    // const session = await getSession()
    const res = await fetch(`${BASE_URL}`, { next: { revalidate: 30 } });
    if (!res.ok) {
      console.log("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    console.log("Failed to fetch data");
  }
}
