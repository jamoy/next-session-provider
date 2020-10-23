# Next Session Provider

A simple session provider for your next.js pages.

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
import { useSessionContext } from 'next-session-provider';

export default function Protected() {
  const { session } = useSessionContext();
  // assuming you have session.isAuthenticated is available
  return (
    <div>
      {session.authenticated && <div>This is a protected page.</div>}
      {!session.authenticated && <div>Make sure you're logged in first.</div>}
    </div>
  );
}
```

setting a session looks like

```tsx
import { useSessionContext } from 'next-session-provider';

export default function Protected() {
  const { session, setSession } = useSessionContext();
  return (
    <div>
      <button onClick={() => setSession('authenticated', true)}>Set authenticate</button>
    </div>
  );
}
```

## LICENSE

next-session-provider is licensed under [MIT](LICENSE)
