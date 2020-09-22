# Next Session Provider

next-session-provider is a simple session provider for your next.js pages.

## Getting started

```shell script
npm install next-session-provider
# or
yarn add next-session-provider
```

in your `pages/_app.tsx`
```tsx
import { SessionProvider } from 'next-session-provider';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
```

in your `pages/protected/route.tsx`
```tsx
import {useSessionContext} from 'next-session-provider';

export default function Protected() {
  const { isAuthenticated } = useSessionContext();
  return (
    <div>
      {isAuthenticated && <div>This is a protected page.</div>}
      {!isAuthenticated && <div>Make sure you're logged in first.</div>}
    </div>
  );
}
```

## Session Configuration

## API

### `{ useSessionContext }`

#### Session Context

##### isAuthenticated

## LICENSE

next-session-provider is licensed under [MIT](LICENSE)