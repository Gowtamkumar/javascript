export async function sendForgotPassword(data: any) {
  const res = await fetch(`http://localhost:3000/api/users/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}
