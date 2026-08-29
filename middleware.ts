import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const adminPaths = ["/admin"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));
  
  if (isAdminPath) {
    const authCookie = request.cookies.get("crossthenics_auth");
    const userRole = authCookie?.value;
    
    if (!userRole || (userRole !== "admin" && userRole !== "staff")) {
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};