import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

  const token = request.cookies.get("token")
  
  if( !token ) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify-token`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ token.value }`
    }
  }).then(res => {
    const token = res.headers.get('authorization')
    request.cookies.set('token', JSON.stringify( token ))
    NextResponse.redirect(new URL('/dashboard', request.url))
  }).catch(error => {
    console.log( error )
    return NextResponse.redirect(new URL('/', request.url));
  })

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
