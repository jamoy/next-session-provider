import { SessionProvider } from '../next-session-provider';

function TestApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default TestApp;
