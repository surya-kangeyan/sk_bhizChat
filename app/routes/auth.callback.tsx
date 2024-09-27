// app/routes/auth/callback.tsx
import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import shopify from "../shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  console.log("auth/callback is called and returning to the original function");

  try {
    // Process the authentication callback with the Shopify library
    const authResult = await shopify.authenticate.admin(request);

    // Retrieve necessary parameters from the authentication result
    // const { shop, accessToken, host } = authResult;

    // Here, you would typically store the accessToken securely in your database

    // Redirect back to your app's homepage or a specific page after successful authentication
    return redirect(`/api/products`);
  } catch (error) {
    console.error("Error during Shopify authentication callback:", error);
    return json({ error: "Authentication failed" }, { status: 500 });
  }
}
