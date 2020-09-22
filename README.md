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
import { useSessionContext } from 'next-session-provider';

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

This function returns the session context that your pages can reuse.

Example:

```tsx
const { authenticate } = useSessionContext();

const [username, updateUsername] = useState('');
const [password, updatePassword] = useState('');

async function loginButton(ev) {
  try {
    await authenticate(username, password);
    router.push('/protected/route');
  } catch (err) {
    setError('not possible');
  }
}
```

#### Authenticators

##### Cookie

##### Header

#### Session Context

##### authenticate: function

A function that you can call to invoke an authentication state to run. This will run the internal authentication resolvers
you have specified in the configuration.

##### isAuthenticated: boolean

You can check this property if you have authenticated or not.

##### session: any

You can get the authenticated session's payload through this property

## Todo

- [ ] Create auth wrappers
- [ ] Provider to do the access/refresh request

## LICENSE

next-session-provider is licensed under [MIT](LICENSE)
