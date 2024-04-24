// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authConfig } from "./config.auth";

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       type: "credentials",
//       name: "credentials",

//       async authorize(credentials, req) {
//         const user = {
//           id: 2,
//           username: "gowtamkumar",
//           password: "admin",
//         } as any;

//         if (
//           user.username === credentials.username &&
//           user.password === credentials.password
//         ) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
//   // secret: process.env.NEXTAUTH_SECRET,
//   // trustHost: true,
// });
