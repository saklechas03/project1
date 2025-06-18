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

-<Link> is the kind of the anchor tag in ht