import { signIn } from 'next-auth/react';

export async function doCredentialLogin(formData) {
  console.log("FormData received:", formData);

  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response.error) {
      console.error("Sign in error:", response.error);
      throw new Error(response.error);
    }

    return response;
  } catch (err) {
    console.error("Error during authentication:", err.message);
    throw err;
  }
}
