export async function resetPassword(data: any, token: any) {
  const res = await fetch(
    `http://localhost:3000/api/users/reset-password/${token}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}
