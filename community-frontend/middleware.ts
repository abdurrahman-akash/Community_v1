import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPublicRoute = createRouteMatcher(
  [
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/forgot-password(.*)',
    '/reset-password(.*)',
    '/',
    '/about(.*)',
    '/contact(.*)',
    '/privacy-policy(.*)',
    '/terms-of-service(.*)',
  ]
)
const isProtectedRoute = createRouteMatcher(['/dashboard(.*']);

// export default  clerkMiddleware((auth,req) =>{
//   const {userId} = auth();
//   const currentUrl = new URL(req.nextUrl)
//   const isAccesingProtectedRoute = currentUrl.pathname === '/dashboard';
//   const apiRequest = currentUrl.pathname.startsWith(`/api`);

//   if(userId && isPublicRoute(currentUrl.pathname) )

// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}