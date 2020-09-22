# Next Session Provider

next-session-provider is a simple session provider for your next.js pages.

## Getting started

```shell script
npm install next-session-provider
# or
yarn add next-session-provider
```

create a `next.session.ts`
```ts
import { InitSessionProvider } from "./component";

export default InitSessionProvider({
  // options
});
```

in your `pages/_app.tsx`
```tsx
import { SessionProvider } from 'next-session-provider';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider {...options}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
```

in your `pages/protected/route.tsx`
```tsx
export default function Protected() {
  return (
    <div>
      This is a protected page. It will redirect to 
    </div>
  );
}

export const withSession = true;
```

## Session Configuration

## API

### `{ useSessionContext }`

#### Session Context

##### isAuthenticated

## LICENSE

next-session-provider is licensed under [MIT](LICENSE)