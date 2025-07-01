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
-3. Image tag is another next js tag
-4.SignInButton - forceRedirectUrl -- i.e whenver login is there direct it to the sign in page
-5. .env new variables - ie NEXT_PUBLIC_CLERK_SIGN_IN_URL = sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_URL = sign-up this states that when we press the login button ..instead of the url of clerk it redirects to the sign url and sign up url accordingly

-6.SignIn button for the dashboard tht whenever the user login to the page ..there exists the dashboard symbol which is imported by shadcn lucide react .. using Layoutdashboard and PenBox for importing a pen like icon for the add transcation and we also want that it becomes invisbile when the screen is smaller.

-7. changes to UserButton - that is the user icon or button of the user profile - the circle looks pretty small .. so we can make it bigger by making changes to the userbuttoon ... that takes apperance for any changes ..UserButton appearance={{elements:{avatarBox: "w-10 h-10" ,},}} ..means the profile box size is increased by mentioned dimensions

-8.PRISMA - so we go to superbase website ..create our new project ...go to orms ..and choose prisma ..and copy it in .env file ..now we chose prisma becoz its more genric than superbase i.e if tommorow we want to use other databases like mysql or neon etc ..we can direclty link it with this.

-9.ARCJET - sign up ..create new site ..wealth ofc ..and copy its secret key ..in .env file...now it is used for protection - from bots , rate limiting , email validation , attack protection , data redaction etc.

-10.INNGEST - it for recurring things in our projects i.e sending email daily or monthly at certain date. replace queues , state management , budget alerts , scheduling and cron jobs (customize the things like whenevr we want a job to be done and selecting the period when it will reccur)
now login into inngest and install its 1.3.2 version and run its local server link ...it will redirect to our project and all the functions that we are creating using inngest would be seen in there.

AFTER THIS WE HAVE SET UP ALL THE BACKEND TECH STACK WE NEEDED FOR THE PROJECT

LANDING PAGE

////// HERO SECTION ///////

-1.create hero.jsx file in components folder and make it a client side file ..basically a client side file can use all the front end logics like hooks etc which can not be run server side . This type of client pages are called the dynamic pages.
-2. update global.css with custom classes for giving gradient effect to heading of th hero section .

## 19th July /2025

-3. For scrolling effect - the banener jpeg moves with the scroll so the scrolling effect can only be seen in the image ..so we have to make some changes in the div of the image using the reference that can be provided using the useRef hook ..that is why we made the hero.jsx as a client to use these hooks.
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

````
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
````

- That means: after mounting, `imageRef.current` will **contain** the actual DOM element (i.e., the `<div>`).
- So when you write:
  const imageElement = imageRef.current;

You are storing the actual DOM element in a variable called `imageElement`, so you can now work with it directly using JavaScript (for example, adding or removing a class).

- What is an Event Listener?

window.addEventListener("scroll", handleScroll);

- What is `window`?

* In JavaScript, `window` is the global object that represents the **browser window**.

- What is `addEventListener()`?

* It's a built-in JavaScript method that lets you **listen** for user actions/events—like:

  - Mouse clicks
  - Key presses
  - Scrolling
  - Resizing the browser

-this line:
window.addEventListener("scroll", handleScroll);

Means:

> “Hey browser, when the user scrolls the page, please run the `handleScroll` function.”

- Cleanup Function

return () => window.removeEventListener("scroll", handleScroll);

- This **removes** the event listener when the component is unmounted (i.e., removed from the page).
- It's important to prevent:

  - **Memory leaks** (browser keeps running unused code)
  - **Multiple listeners** stacking up when the component renders again.

* In Short — What’s Happening?

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

////////// DATA SECTION WITH SOME INFO ABOUT THE SITE ///////////////

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

**_IMP _**

Render - Turn your code (JSX) into visible HTML on the browser.

Mount - First time the component is added to the page and rendered.

Re-render - React renders the component again because something changed (state, etc.)

DOM - The tree structure of HTML elements in the browser.

///////////////DASHBOARD DESIGN///////////////////

-1. Understanding of design of dashboard

- we have 4 tables - users , accounts , transcations and budgets
- the user table is in 1-1 relationship with budget table as one user can only have 1 budget, then there is i to many relationship of user with accounts and transcations , similarly there can be 1 account and in there many transcations so 1 to many relationship between accounts and transcations.
- now there is a primary key of each table that will be used in here.
- accounts will have type as an attribute ..i.e which type of account savings , current etc ...there is also a foreign key - userid in accounts that connect the accounts table with the users table.
  -there can be many foreign keys in a table bt only one primary key.

  3.install prisma : npm i -D prisma --legacy-peer-deps and then npx prisma init - it will create a prisma folder in our project.

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

here - transactions Transaction[] means that transactions are seen by the transaction model /table

@@map("users") - this states that table will be recoreded or displayed as users table.

-5. create model accounts :

user User @relation(fields: [userId],references: [id],onDelete: Cascade)

This is used to define a foreign key relationship between two models—in your case, probably from a model accounts to the User model.

Explanation of the parts:

user User @relation(fields: [userId], references: [id], onDelete: Cascade)

-user- The name of the field in the current model (e.g., a account belongs to a User)

-User - The related Prisma model name (target of the relation)

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

7. create a prisma.js file in lib folder and create prisma client - db - using which we can make calls to our database .

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

//////////// ADDING USER DATA INTO OUR DATABASE /////////////

1.create a checkuser.js in lib folder:

-This code defines an asynchronous function checkUser that integrates Clerk (authentication provider) with a Prisma ORM database to check whether the currently authenticated user exists in the database and creates a new user if not.

-export const checkUser = async () => {
This defines an asynchronous function named checkUser which:
Checks if a user is authenticated via Clerk.
If authenticated, it checks if the user already exists in the database.
If not, it creates a new record for that user.

-const user = await currentUser();
if (!user) {
return null;
}
This gets the current user from Clerk.
If the user is not logged in (user == null), the function immediately returns null.

-try {
const loggedInUser = await db.user.findUnique({
where: {
clerkUserId: user.id,
},
});
Inside a try block (to catch any errors), it attempts to find a user in the database where the clerkUserId (a custom field) matches the Clerk user's ID.
db.user.findUnique is a Prisma method that returns a single record (or null) based on a unique field.

-if (loggedInUser) {
return loggedInUser;
}
If a matching user is found, it returns that user — no further action is needed.
If Not Found – Create New User:
code
const name = `${user.firstName} ${user.lastName}`;
const newUser = await db.user.create({
data: {
clerkUserId: user.id,
name,
imageUrl: user.imageUrl,
email: user.emailAddresses[0].emailAddress,
},
});
return newUser;

-If no existing user is found:
It constructs the name from firstName and lastName.
Then it creates a new user in the user table using db.user.create.
It stores the Clerk ID, full name, profile image URL, and email.
Note: emailAddresses[0] is used — assuming the first email is the primary one.
Returns the newly created user object.

- Error Handling:
  code
  } catch (error) {
  console.log(error.message);
  }
  If any error occurs during the database lookup or creation process, it logs the error message to the console.
  Important: The function does not return anything if an error occurs — this might be a bug. You may consider adding return null or throw error here.

## 24th JULY,25

////////////////// ROUTING //////////////////////

- IN NEXT JS , apart from the original folders .. (default installed with next js) if any other foldr is created it is treated as a folder for routing in next js.

-create main folder , dashboard folder, page.jsx, account folder ..inside it - another folder [id]- this is id folder which act as the dynamic router in app folder.

-sigle square bracket - dynamic router .

- double brakets - catch all routes .

- create transcation folder :
- inside it create files - page.jsx and layout.js
  -create 404 page not found for our app

/////////////////// DASHBOARD //////////////////

1. create layout.js and page .jsx in dashboard folder as they act as the router folders.

-Suspense is a special React component that waits ("suspends") for asynchronous content to load, and displays a fallback UI while waiting.

🧠 Use Cases:
Lazy-loaded components (React.lazy)
Server components in Next.js App Router
Streaming content
Async data fetching with use in React Server Components.

-Fallback - This is the UI shown while the content inside Suspense is loading.

-BarLoader- Likely from a package like react-spinners
It's a pre-built loading bar animation component.

2. SERVER ACTION - are like API's but can be written as functions in next js ..new feature from next js 13.

- we have to create actions folder for this ..and in here there will be all the server's logic.
- will create dashboard.js - it will have the server function for creating the account and will take the data given by the server and will be stored in there.

-logic :

- check the user is authorised or not by checking the data given from our database - i.e on the basis of user id.
- convert the balance into float and if not in float throw an error
  -check if user has an existing account or is the first timer.
- if it has many account bt still wants a login then make the new account as default and the default account as no default ..i.e all other accounts as not default.
  if(shouldBeDefault){
  await db.account.updateMany({
  where: {userId: user.id , isDefault:true},
  data: {isDefault: false}, //this says make other data from defaults as false i.e making all other accounts as non default.
  }

- Convert the balance back to decimal because nextjs dosent take it as float value using the function serializeTransaction.

- const serializeTransaction = (obj) => {
  This line defines an arrow function named serializeTransaction that takes a single argument obj.

🧠 Purpose:
This function is meant to prepare or “serialize” a transaction object (likely coming from a database or API).
It's commonly used when you’re working with data types that are not JSON serializable (like BigNumber, Decimal, Date, etc.).

-const serialized = { ...obj };
This line uses the spread operator (...) to create a shallow clone of the input object obj.

✅ Why clone?
So that we don’t mutate the original input.It creates a new object (serialized) with the same keys and values as obj.

-if (obj.balance) {
This is a conditional check to ensure that obj.balance exists.

🔍 Checks for:
obj.balance is not undefined, null, 0, false, or an empty string.
⚠️ However, if(obj.balance) is truthy check, so it will skip if balance is 0, which may not be what you want.

-serialized.balance = obj.balance.toNumber();
This line tries to convert the balance property to a regular JavaScript number.

🔧 Common in:
ORMs like Prisma, which use Decimal.js
Libraries like ethers.js, which return BigNumber objects..toNumber() safely converts high-precision types to plain JS numbers.

-What does revalidatePath("/dashboard") do?
It refreshes the /dashboard page so that any new data (like updated balance or account info) is shown immediately after you make a change.

❓Why do we need it?
Next.js App Router tries to save time by caching (saving) pages — like /dashboard.

That means:
If you change something (e.g., add money, edit a transaction),
The page might still show old data from the cache.
“Hey, something changed — please refresh /dashboard so the user sees the latest data.”

-return { success: true, data: serializeAccount };
✅ What it does:
Returns a JSON object indicating the mutation was successful, and includes the updated/serialized account data.

3.create a create-account-drawer component in components folder.

- install npm i react-hook-form zod @hookform/resolvers --legacy-peer-deps

-react-hook-form
📦 What it is:
A lightweight library for handling forms in React — with very little code and high performance.
✅ Why use it?
It manages form state (input values, validation, errors) efficiently.
Works very well with TypeScript.
It replaces manually tracking inputs with useState.

-zod
📦 What it is:
A TypeScript-first schema validation library.
✅ Why use it?
It lets you define what valid data should look like like setting rules: "Name must be at least 3 characters."
Can be used to validate form inputs or API data.

-@hookform/resolvers
📦 What it is:
A bridge between react-hook-form and validation libraries like zod, yup, joi, etc.
✅ Why use it?
Allows react-hook-form to use your Zod validation schema automatically.
You don’t have to manually validate every input.

-const [open, setOpen] = useState(false);
✅ What it does:
This is a React hook (useState) that creates a state variable called open.
open holds a boolean value — true (drawer is open) or false (drawer is closed).
Initially, it's set to false, so the drawer is closed by default.

-open={open}: This tells the Drawer whether it should be open or closed, based on the open state.
onOpenChange={setOpen}: This tells the Drawer how to update the open state when user opens/closes it.
✅ It links the drawer’s open/close behavior to your component’s state.

-This is the trigger button or content that will open the drawer when clicked.
{children} is the content you passed into <CreateAccountDrawer>, such as a <Button>.
So clicking on the children element will open the drawer.

4. create schema for the create account for dashboard

-create lib folder in app and file - schema.js
-use zod to create schema.

5.create account form using zod in create-account-drawer.jsx file

- useForm({ ... })
  This is the core function from react-hook-form.
  It sets up a complete form management system — including:
  Form state (e.g. values, errors)
  Validation
  Submitting
  Resetting
  Watching field values live.

-resolver: zodResolver(accountSchema)
✅ What it does:
This connects the form to a Zod validation schema.

accountSchema is a Zod object that defines the rules for each field (like "name" must be at least 3 characters, or "balance" must be a number).

🔍 zodResolver:
It's a utility from @hookform/resolvers that lets react-hook-form automatically validate inputs using Zod.

- defaultValues: { ... }
  ✅ What it does:
  This sets the initial values for the form fields when the component loads.


-register
✅ What it does:
Used to connect each input field in your form to the form system.
Example:
<input {...register("name")} />
✅ This will:
Track the value of name
Validate it using Zod
Catch any errors



- handleSubmit
✅ What it does:
A function you wrap around your form’s submit handler.
It will:
Validate the form
Call your onSubmit(data) function if all is valid
🔍 Example:<form onSubmit={handleSubmit(onSubmit)}>




- formState: { errors }
✅ What it does:
This gives you access to any validation errors for your fields.
🔍 Example:
{errors.name && <p>{errors.name.message}</p>}
Shows the error message for the name field if it failed validation.



- setValue
✅ What it does:
Lets you manually set the value of a field (e.g., from another component or event).
🔍 Example:
setValue("balance", "1000");





- watch
✅ What it does:
Lets you watch the current value of one or more fields in real time (like for live previews or dynamic logic).
🔍 Example:
const currentBalance = watch("balance");
🔹 reset
✅ What it does:
Resets the form to its default values (or to new values you pass in).

- onValueChange={(value) => setValue("type", value)}
✅ What it does:
Whenever the user selects a new option from the dropdown,This function runs and updates the "type" field in your form.



-defaultValue={watch("type")}
✅ What it does:
This sets the initial value shown in the dropdown.
It uses watch("type") to get the current value from your form state.
🧠 Why important?
If you're using defaultValues like:
defaultValues: {
  type: "CURRENT"
}
Then this makes sure the dropdown initially shows CURRENT selected.



- What does step="0.01" mean?
It tells the browser and the input field that:
✔️ The user is allowed to enter decimal numbers, with 2 digits after the decimal point — like 1.00, 5.25, or 123.99.


5. API Calls to the form created for creating the account .

- create a folder - hooks - file -use-fetch.js.
-use Toaster from sonner - installed through shadcn ui -2.1.7


//////////////////RENDER THE ACCOUNTS //////

1. render the accounts in server i.e dashbaord.js.
2._components folder is created for creating the account cards.
3.create account.js in server actions for:

 Switch checked={isDefault}/>{/* this automatically switches the account that is default i.e if we have 2 accounts .. then it automatically makes teh switch button i.e slider to the right i.e make it true for the default account .. now if we switch on the button manually fro another account , then it should make the it as default and remove the previous one and update the page..so it is done by the server action */}

4. use account[id] folder - page.jsx to fetch info about each account using its params.id i.e the local host id.
it is used to build the accounts page.



////////        ACCOUNTS PAGE ////////////////

1.create seed.js in actions folder. for the dummy transactions to show on accounts page by installing date-fns using npm i date-fns --legacy-peer-deps fro storing dates efficiently in next js.
2.create api folder in app folder to call the seed function.
3.create seed folder - route.js - this is an api.
4.create a new folder _components in account folder of (main) and then create transaction-table.jsx fro creating the transaction table.
4.create categories.js in data folder.
5.write all fuctionalities and everything in transaction table.
6. write the bulk delete transaction code in server from acounts.js and then implement the logic relating it in transacation table.




///CHARTS IN ACCOUNT PAGE ///

1. create account-charts.jsx in _components folder in main folder.
2. work along the logic in both the above file and page.jsx in [id] to built  chart.
3.install recharts npm i recharts --legacy-peer-deps.

//COMING BACK TO DASHBOARD PAGE FOR IMPLEMENTING THE BUDGET AND INGEST FUNCTION OF DIALY REMINDERS OF BUDGET

1. create new budget.js in action for server.
2.create another file in _componenets folder of dashbaord folder to create file - budget.jsx 
3. implement logic in both budget.js and budget-progress.jsx and page.jsx to make the card for budget.
4.install inngest - 3.27.4 and run commmand - npx inngest-cli@latest dev
5. make inngest folder in api folder of app folder ..to create the file - route.js.
6. make an inngest folder in lib too to make a file - client.js.
7. set up in both files according to logic and documentation from the site.
8. make functions.js in lib folder - inngest
9.remember for running these two local host we would require two new terminals working simultaneously.
10.Now work on these three files for the inngest logic.

// EMAIL//
1.go to react - email and follow the stpes in doc ..bt install email commponents - 0.0.30
2. create email folder and template file to create the template for our email ..that could be seen when we run command np run email and copy the localhost in the web browser to see our template.
3. create the template in the template.jsx.
4. install resend email bt first create account on resend email and make a api key for it then install it using docs and legacy peer deps.
4.create a new server file in actions named as - send-email.js.
5. npx inngest-cli dev -u http://localhost:3000/api/inngest




///  TRANSACTION FORMS ///

1. create transaction.js server file in actions folder.
2. in already created transaction folder in main .. create another folder _components and a file named - transaction-form.jsx.
3. create schema for transactions in schema.js in lib folder.
4. work with these above files and page.jsx of transaction folder.
5. we want to limit our transactions to 10 so we keep a check using arcjet and userId for specific user.So install arcjet and create arcjet.js in lib folder.





//// AI RECIEPT SCANNER ///

1. change the settings of next.config.mjs for images.
2. generate api key for gemini.
3. use gemini pricing models and read about it.
4. we are using gemini-1.5-flash . read about the request it provides.
5. create recipt-scanner.jsx file in _components foler of transaction folder.
6. work with logic in transactionform.jsx and above file.
7. add animation in it by defining some logic in global css.



//  RECURRING TRANSACTION WORKING ///

1. it is done through page.jsx in transaction , transaction.form.jsx and transaction.js, function.js,route.js.



/// GENERATE MONTHLY REPORTS    ////

1. it will give the user the reports as well as some tips how to save the money.
2. work with route.js , template.jsx and function.js for generating ai based reports .



///   DASHBOARD EXPENSE PIE CHART   /////

1. work with dashbaord.js , page.jsx from dashboard folder.
2. create transactions-overview file in _components folder of dashbaord folder to work with above files.



//BOT PROTECTION AND ARCJUET SHEILD ///

1. make changes in mddleware for it.















 


 