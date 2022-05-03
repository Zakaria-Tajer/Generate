import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'


export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const {token} = req.cookies

    const { pathname } = req.nextUrl

    if(pathname.includes('/client') && token){
        return NextResponse.next()
    }else if(pathname.includes('/client') && !token){
        return NextResponse.redirect(new URL('/', req.url))
    }
}