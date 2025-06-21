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


 ## 19th July /2025

 -3. For scrolling effect -  the banener jpeg moves with the scroll so the scrolling effect can only be seen in the image ..so we have to make some changes in the div of the image using the reference that can be provided using the useRef hook ..that is why we made the hero.jsx as a client to use these hooks.
 -4. create useRef for the image.
 -5. create useEffcet with the intension of taking the current position and changing the position of the during the scroll with the threshold ans some conditions.





- What is a **hook**?

* In React, a **hook** is a special function that lets you “hook into” (i.e., use) **React features** like state, lifecycle events, and refs inside **functional components**.
* Examples of hooks: `useState`, `useEffect`, `useRef`, etc.

- What is `useRef()`?

* `useRef()` is a **built-in React hook**.
* It creates a **reference object** that you can attach to a **DOM element**.
* This lets you access and modify that element **directly**—without re-rendering the component.

- `useEffect()` – React Hook

useEffect(() => {
  // some code
}, []);
```
- What is `useEffect()`?

* `useEffect()` is another built-in React **hook**.
* It lets you run **side effects** in your components.

- What is a **side effect**?

* A side effect is **any code** that:

  * Runs **outside** the usual rendering process
  * Affects things **outside the component**, like:

    * Accessing the DOM
    * Fetching data from an API
    * Setting a timer
    * Adding event listeners

In our case, the side effect is **attaching a scroll event listener** to the window.

- What does “mounting” mean?

* “Mounting” is a lifecycle term in React.
* It means the component is being **added to the web page** and **rendered** for the first time.
* React takes your JSX → turns it into HTML → inserts it into the DOM.
* `useEffect(() => { ... }, [])` runs **after** the component is mounted.

---

- Accessing the DOM Node

- Code:

const imageElement = imageRef.current;

 What happens here?

* You have attached `ref={imageRef}` to this JSX element:

```jsx
<div ref={imageRef} className="hero-image">
```

* That means: after mounting, `imageRef.current` will **contain** the actual DOM element (i.e., the `<div>`).
* So when you write:
const imageElement = imageRef.current;


You are storing the actual DOM element in a variable called `imageElement`, so you can now work with it directly using JavaScript (for example, adding or removing a class).

- What is an Event Listener?

window.addEventListener("scroll", handleScroll);

- What is `window`?

* In JavaScript, `window` is the global object that represents the **browser window**.

- What is `addEventListener()`?

* It's a built-in JavaScript method that lets you **listen** for user actions/events—like:

  * Mouse clicks
  * Key presses
  * Scrolling
  * Resizing the browser

-this line:
window.addEventListener("scroll", handleScroll);


Means:

> “Hey browser, when the user scrolls the page, please run the `handleScroll` function.”

- Cleanup Function

return () => window.removeEventListener("scroll", handleScroll);


* This **removes** the event listener when the component is unmounted (i.e., removed from the page).
* It's important to prevent:

  * **Memory leaks** (browser keeps running unused code)
  * **Multiple listeners** stacking up when the component renders again.

- In Short — What’s Happening?

1. `useRef()` gives us a **way to access the HTML element** from React.
2. `useEffect()` lets us **run code after the page has loaded**.
3. We use the **ref** to point to the banner image container.
4. We use `addEventListener("scroll", ...)` to detect when the user scrolls.
5. Based on scroll position, we **add or remove** a CSS class (`scrolled`) to trigger visual effects.




-3. handlescroll function -

-window.scrollY: Gives the number of pixels the document is currently scrolled vertically.

scrollThreshold = 100: The point after which the animation should occur.

If the user has scrolled more than 100 pixels, the class "scrolled" is added to the image.

If not, it's removed.

Adding/removing this class will trigger a CSS transition (you’ll see this below).

-4. CSS wrapper in global css for hero section -

-perspective: 1000px;

This sets the 3D perspective for child elements.

It gives the illusion of depth when 3D transforms (like rotateX) are applied.

A lower number = more dramatic perspective; 1000px is moderate.

-transform: rotateX(15deg) scale(1);

Initially, the image is tilted 15 degrees backward around the X-axis (like looking at a tilted photo).

transition: transform 0.5s ease-out;

This tells the browser to smoothly animate any changes to the transform property over 0.5 seconds.

ease-out: Starts quickly, ends slowly.

will-change: transform;

Optimization hint to the browser: “I’ll animate this soon, so prepare.”

Helps the browser optimize rendering for smoother animations.

.hero-image.scrolled {
  transform: rotateX(0deg) scale(1) translateY(40px);
}

-This is applied when the .scrolled class is added (after scrolling).

rotateX(0deg): Image comes to a flat front-facing position.

translateY(40px): Moves the image 40px down, giving a visual lift.

The transition makes this shift smooth and animated.

-Summary of Behavior
Page loads → image appears slightly tilted (rotateX(15deg)).

As the user scrolls down past 100px, the image:

Tilts flat (0deg),

Slides down 40px.

This creates a nice interactive scroll effect—drawing attention and giving depth.

If the user scrolls back up, the image returns to its original position (tilted).






//////////   DATA SECTION WITH SOME INFO ABOUT THE SITE    ///////////////

-1. make the folder data
-2. create file landing.js for keeping all the data that can be used to create our landing page.
-3. display the stats data on the window by mapping it in page.jsx file .
map() is a JavaScript array method that lets you transform each element in an array and return a new array.

It loops through every item in an array and applies a function to each item, returning a new array of the same length.

-4. similarly create another section for features data and use card from shadcn ui to display the title , icon , description using a card..we have only used card content from card here...and then add some tailwind css.

-5. Then how it works data & Testimonials in page.jsx - When we will take testimonials it can show error becoz of our random images being generated for the testimonials. So for removing the error we have to go to the next.js.config( it configures external image loading via the next/image component).
- images
This is the main object used to configure Next.js image optimization settings.

It's part of Next.js's built-in Image Optimization API, which works with the <Image> component from next/image.

- remotePatterns
This is used when you're loading images from external (remote) domains — in this case, from https://randomuser.me.

By default, Next.js blocks all external image URLs unless you explicitly allow them in this list.

- What This Configuration Does
{
  protocol: "https",
  hostname: "randomuser.me"
}
This allows Next.js to optimize and serve images from:
Copy code
https://randomuser.me

-6. Make the call to button after testimonial for the start your free trial and a link of this button to the dashboard.

***IMP ***

Render - Turn your code (JSX) into visible HTML on the browser.

Mount - First time the component is added to the page and rendered.

Re-render -	React renders the component again because something changed (state, etc.)

DOM - The tree structure of HTML elements in the browser.




///////////////DASHBOARD DESIGN///////////////////

-1. Understanding of design of dashboard 
- we have 4  tables - users , accounts , transcations and budgets 
- the user table is in 1-1 relationship with budget table as one user can only have 1 budget, then there is i to many relationship of user with accounts and transcations , similarly there can be 1 account and in there many transcations so 1 to many relationship between accounts and transcations. 
- now there is a primary key of each table that will be used in here.
- accounts will have type as an attribute ..i.e which type of account savings , current etc ...there is also a foreign key - userid in accounts that connect the accounts table with the users table.
-there can be many foreign keys in a table bt only one primary key. 

3.install prisma : npm i -D prisma --legacy-peer-deps  and then npx prisma init - it will create a prisma folder in our project.

4.create model or table for users in schema.prisma file - here :

🔹 id
This is the name of the field.

It will become the primary key column in the PostgreSQL table.

In your database, this column will be named id.

🔹 String
This is the data type of the field.

You're telling Prisma that the value of id is a string (text) in the database.

Even though UUIDs are a special type, Prisma handles them as strings by default in most databases like PostgreSQL.

🔹 @id
This Prisma attribute marks the field as the primary key.

This means:

Each row must have a unique id.

It will be used to uniquely identify each record.

🔹 @default(uuid())
This sets a default value for the field using the uuid() function.

Every time a new record is created and you don’t explicitly set the id, Prisma will automatically generate a UUID v4 string for you.


-What @unique Does:
Adds a unique constraint at the database level.

Ensures that no two records in the User table can have the same email.

Prisma will also enforce this rule when using prisma.user.create() or prisma.user.update().

here -  transactions  Transaction[] means that transactions are seen by the transaction model /table


  @@map("users") - this states that table will be recoreded or displayed as users table.

  -5. create model accounts :

   user User @relation(fields: [userId],references: [id],onDelete: Cascade)

  This is used to define a foreign key relationship between two models—in your case, probably from a model accounts to the User model.

 Explanation of the parts:

user   User   @relation(fields: [userId], references: [id], onDelete: Cascade)

-user- The name of the field in the current model (e.g., a account belongs to a User)

-User - 	The related Prisma model name (target of the relation)

- @relation(...)-Tells Prisma how to set up the foreign key relationship


Inside @relation(...):
fields: [userId]
→ This means the current model has a field named userId (a foreign key).

references: [id]
→ This says the userId references the id field in the User model.

onDelete: Cascade
→ If the User is deleted, then all related records in this model will also be automatically deleted (cascading delete).

-@@index([userId])
This is a database index declaration.

-Purpose of an index:
Speeds up lookups and queries involving userId.
This index ensures that such queries are faster, especially when the table has many rows.

-6. connect prisma to superbase i.e sync the project through creating a direct connection and running commands :npx prisma generate
npx prisma migrate dev --name create-models
- here the prisma has automatically made the sql file for us after the connection that is migration sql - in which the sql for all the tables are directly written and we dont have to write it all.


7. create a prisma.js file in lib folder and create  prisma client - db - using which we can make calls to our database .

 -globalThis is a global object in modern JS (like window in browsers or global in Node).

The line:export const db = globalThis.prisma || new PrismaClient();
does:

✅ If globalThis.prisma already exists, reuse it.

❗ If not, create a new PrismaClient.

Why?
➡️ To avoid multiple instances of PrismaClient being created during development when the app reloads (especially in Next.js dev mode).i.e next js has a thing that we also see . that it reloads each time make make any minute changes too .. so we dont want that it create each time a new prisma client instead each time an prisma instance is created ..it gets in global prisma ....

🔹 if (process.env.NODE_ENV !== "production") { ... }
This condition ensures:

✅ In development: attach prisma instance to globalThis so it's reused across hot reloads.

❌ In production: don’t attach to globalThis (use a clean instance instead).

Why?
In production, processes are long-lived and hot reload doesn't happen — so using a fresh PrismaClient() is fine and avoids memory leaks.i.e in production process there are very less reloads ..so there we can use or create a prisma client bt apart from that we want it to be stored in the global prisma.



//////////// ADDING USER DATA INTO OUR DATABASE  /////////////

1.create a  checkuser.js in lib folder 



