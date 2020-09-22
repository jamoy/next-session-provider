import Link from 'next/link';
import {useSessionContext} from '../../';
import {useRouter} from "next/router";

export default function Protected() {
  const { isAuthenticated, authenticate } = useSessionContext();
  const router = useRouter();

  function logout() {
    authenticate(false);
    router.push('/');
  }

  return (
    <div>
      {isAuthenticated && <>
          You are logged in!
          <div><a href="#" onClick={() => logout()}>logout</a></div>
      </>}
      {!isAuthenticated && <>
          This is a protected page
          <div><Link href="/login"><a>login</a></Link></div>
      </>}
    </div>
  )
}
