# Advance example of Next.js, Prisma, TypeScript and shared code

This repo shows Next.js combined with Prisma in TypeScript.
It shows Prisma both used in Next.js in getServerSideProps and in node.js http
server. Both made in TypeScript sharing all types.

Prisma is only available on the backend node.js environment. This means that
Next.js has to treeshake the library out.

The node.js server shares typescript config so that the code in server can also
resolve the `services` folder when using your code editor.

This example is more advance than [next.js examples custom-server-typescript](https://github.com/vercel/next.js/tree/canary/examples/custom-server-typescript)

## Development

Start the sqlite database

```
npx prisma migrate dev
```

Run one window with

```
npm run watch
```

and another terminal with

```
npm run dev
```

## Production

First run

```
npm run build
```

and then start

```
npm start
```
