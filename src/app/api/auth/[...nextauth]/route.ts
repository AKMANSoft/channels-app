import axiosInstance from "@/services/axiosInstance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const providers = [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: "Email", type: "email", placeholder: "ali@example.com" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials, req) {
      try {
        const response = await axiosInstance.post("/auth/login", credentials);
    
        if (response.data && response.data.accessToken) {
          const user = {
            id: response.data.userId,
            name: response.data.userName,
            email: credentials.email,
            accessToken: response.data.accessToken,
          };
          return Promise.resolve(user);
        } else if (response.status == 401) {
          throw new Error(response.data.message);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }),
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    allowDangerousEmailAccountLinking: true,
  }),
];
const handler = NextAuth({
  providers,
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error", // Error code passed in query string as ?error=
    verifyRequest: "/verify-request", // (used for check email message)
    newUser: "/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

export { handler as GET, handler as POST };
