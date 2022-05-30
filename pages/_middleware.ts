import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { token, role } = req.cookies;

  const { pathname } = req.nextUrl;

  if (pathname.includes("/client") && token) {
    return NextResponse.next();
  } else if (pathname.includes("/client") && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  } else if (role === "admin" && token) {
    return NextResponse.redirect(new URL("/Admin/dashboard", req.url));
  }
  //   } else if (pathname.includes("/Admin/") && !token) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   } else if (role == "admin") {
  //     return NextResponse.redirect("/Admin/dashboard");
  //   }

  return NextResponse.next();
}
