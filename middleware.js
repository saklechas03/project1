import arcjet, { createMiddleware, detectBot, shield } from '@arcjet/next';
import { clerkMiddleware , createRouteMatcher} from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher([
      "/dashboard(.*)",
      "/account(.*)",
      "/transaction(.*)",
]);


const aj = arcjet({

  key: process.env.ARCJET_KEY,

  rules:[
    shield({
      mode: "LIVE"
    }),

    detectBot({
    mode:"LIVE",
    allow: [
      "CATEGORY:SEARCH_ENGINE" , "GO_HTTP"
    ], // we dont need one seacrh engine or nay specific we are allowing all , also go http is needed for inngest to work with us .
  }),


],

  });


const clerk = clerkMiddleware(async(auth,req)=>{
  const {userId} = await auth();
  if(!userId && isProtectedRoute(req)){
    const {redirectToSignIn} =await auth();
    return redirectToSignIn();

  }
       return NextResponse.next();
}
);


export default createMiddleware(aj,clerk);


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};