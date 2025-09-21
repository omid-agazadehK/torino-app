import { NextResponse } from "next/server";

const protectedRoutes = ["/checkout", "/dashboard", "/profile"];

export async function middleware(req) {
  let accessToken = req.cookies.get("accessToken")?.value;
  let refreshToken = req.cookies.get("refreshToken")?.value;
  const isProtect = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );
  if (!accessToken && !refreshToken && isProtect) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  try {
    if (!accessToken && refreshToken) {
      //request for new accessToken
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        },
      );
      //reidrect if refreshToken is invalid
      if (!res.ok) {
        const response = isProtect
          ? NextResponse.redirect(new URL("/", req.url))
          : NextResponse.next();

        response.cookies.delete("accessToken");
        response.cookies.delete("refreshToken");

        return response;
      }
      //set accessToken cookie if refresh token is valid
      const { accessToken: newAccessToken } = await res.json();
      const response = NextResponse.next();
      response.cookies.set("accessToken", newAccessToken);
      return response;
    }
  } catch (err) {
    console.error("Middleware error:", err);
    return NextResponse.redirect(new URL("/", req.url));
  }
}
export const config = {
  matcher: "/:path*",
};
