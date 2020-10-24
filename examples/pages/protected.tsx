import Link from 'next/link';
import { useSessionContext } from '../next-session-provider';
import { useRouter } from 'next/router';

export default function Protected() {
  const { session, setSession } = useSessionContext();
  const router = useRouter();

  function logout() {
    setSession('authenticated', false);
    router.push('/');
  }

  return (
    <div>
      {session.authenticated && (
        <>
          You are logged in!
          <div>
            <a href="#" onClick={() => logout()}>
              logout
            </a>
          </div>
        </>
      )}
      {!session.authenticated && (
        <>
          This is a protected page
          <div>
            <Link href="/login">
              <a>login</a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
