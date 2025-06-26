This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Adding shadcn buttons and themeproviding and wraping them over the children of layout component 

Added Auth :question 1: i dont know how am using the env file i just added the api auth kindeauth routets and started working w it in navbar ? did i wrap my children with the data?

did i understand auth ? YES didnt work on the sessions tho would love to implement it   
can i impliment it myself ?
understand each and every error 


1.npm i-D prima {so it doenst come up while deploying becomes a dev dependency and not needed during production}
2.npm i @prisma/client { this will add it to dependency}
3.npx primsa init {initializes the local prisma}

learnt about pgbouncer while adding supabase w prisma 

created the user model in schema.prisma and then after that did 
npx prisma db push 
and pushed it 

now how do we store out user in the db?

out of all the ways the easiet one is to make a new route handles or api route

so in api/auth/creation is created


got a lot of prisma errors i wouldnt have survied if there werent chatgpt mostly it was beacuse of the output thing that outgenerateed and filepath issues 
got this working 
and i thought why am i even doing sm for prisma while i was getting the auth done but then i realised i was doing it for the database

using useformStatus hook from react 
