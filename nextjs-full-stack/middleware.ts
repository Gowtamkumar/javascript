export { default } from "next-auth/middleware";

// export async function middleware(req: NextRequest) {
//   console.log("🚀 ~ req:", req.nextUrl)

// }

export const config = {
  matcher: [
    "/dashboard((?!api|_next/static|_next/image|favicon.ico).*)",
    // "/api/:path*",
  ],
};
