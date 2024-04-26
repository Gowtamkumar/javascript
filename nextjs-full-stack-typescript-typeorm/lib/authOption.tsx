import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials: any) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();
        // console.log("🚀 ~ user:", user)
        if (res.ok && user.data) {
          return user.data;
        } else {
          throw new Error("Invalid Login Credentials");
        }
      },
    } as any),
  ],
  pages: {
    signIn: "/login",
  },
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error",
  //   verifyRequest: "/auth/verify-request",
  //   newUser: "/auth/new-user",
  // },
  secret: process.env.NEXTAUTH_SECRET, // Adjust the type based on your environment variable
  session: { strategy: "jwt", maxAge: 1 * 24 * 60 * 60 }, // 1 day
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: token.user,
        token: { exp: token.exp, iat: token.iat, jti: token.jti },
      };
    },
    async jwt({ token, user, account, profile }: any) {
      if (typeof user !== "undefined") {
        return {
          ...token,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            role: user.role,
            status: user.status,
            isAdmin: user.isAdmin,
          },
        };
      }
      return token;
    },
  },
};
