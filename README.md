This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## DAILY DOCUMENTATION 

## 18TH JULY,25
 
SIGN IN & SIGN UP PAGE : 
 
-so basically when any one opens our dashboard it should not redirect to the clerk original https ..instead the url should be ours i.e local host dashboard or something ..so for that we make the sign in sign up page 
-if we want to create a route for the app say here sign-in ..so we can create a folder for it in the app folder ..and create a page.jsx file for it .and its done ..now when we type localhost:3000/sign-in ..it will redirct us to the page.jsx file content 


PUBLIC AND PRIVATE ROUTERS AND GROUPING THEM 

- we want that next js must ignore the name of the folder bt not the functionalities so we name the folder using parenthesis like (auth).
-make another router in ut ..ie called catch all route as it is an optional route that take additional parameters and is enclosed in [[...]]here sign in ..is a catch all route with page.jsx moved inside it. so basically this router is directs us to the sign in dialogue box of clerk ..whenever the user goes to the sign in page .
-1.create (auth) folder
-2.create sign-in\[[...sign-in]]\page.jsx
-3.create sign-up\[[...sign-up]]\page.jsx
-create layout.jsx -//we can provide a wrapper for our folder also i.e auth ...so for both sign up and sign in ..we are creating the layout page.



CUSTOMISE THE HEADER 

-1.navbar
-2.<Link> is the kind of the anchor tag in html
-3. Image  tag is another next js tag 
-4.SignInButton - forceRedirectUrl -- i.e whenver login is there direct it to the sign in page
-5. .env new variables - ie NEXT_PUBLIC_CLERK_SIGN_IN_URL = sign-in 
NEXT_PUBLIC_CLERK_SIGN_IN_URL = sign-up   this states that when we press the login button ..instead of the url of clerk it redirects to the sign url and sign up url accordingly 

-6.SignIn button for the dashboard tht whenever the user login to the page ..there exists the dashboard symbol which is imported by shadcn lucide react .. using Layoutdashboard and PenBox for importing a pen like icon for the add transcation and we also want that it becomes invisbile when the screen is smaller.

-7. changes to UserButton - that is the user icon or button of the user profile - the circle looks pretty small .. so we can make it bigger by making changes to the userbuttoon ... that takes apperance for any changes ..UserButton  appearance={{elements:{avatarBox: "w-10 h-10" ,},}} ..means the profile box size is increased by mentioned dimensions 

-8.PRISMA - so we go to superbase website ..create our new project ...go to orms ..and choose prisma ..and copy it in .env file ..now we chose prisma becoz its more genric than superbase i.e if tommorow we want to use other databases like mysql or neon etc ..we can direclty link it with this.

-9.ARCJET - sign up ..create new site ..wealth ofc ..and copy its secret key ..in .env file...now it is used for protection - from bots , rate limiting , email validation , attack protection , data redaction etc.

-10.INNGEST - it for recurring things in our projects i.e sending email daily or monthly at certain date. replace queues , state management , budget alerts , scheduling and cron jobs (customize the things like whenevr we want a job to be done and selecting the period when it  will reccur)
now login into inngest and install its 1.3.2 version and run its local server link ...it will redirect to our project and all the functions that we are creating using inngest would be seen in there.

AFTER THIS WE HAVE SET UP ALL THE BACKEND TECH STACK WE NEEDED FOR THE PROJECT 



LANDING PAGE 

 ////// HERO SECTION ///////
 
 -1.create hero.jsx file in components folder and make it a client side file ..basically a client side file can use all the front end  logics like hooks etc which can not be run server side . This type of client pages are called the  dynamic pages.
 -2. update global.css with custom classes for giving gradient effect to heading of th hero section .
