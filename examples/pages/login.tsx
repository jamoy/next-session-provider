import { useSessionContext } from 'next-session-provider';
import { useRouter } from 'next/router';

export default function Login() {
  const { setSession } = useSessionContext();
  const router = useRouter();

  async function doAuth() {
    setSession('authenticated', true);
    router.push('/protected');
  }

  return (
    <div>
      login with a session
      <div>
        <button onClick={() => doAuth()}>login</button>
      </div>
    </div>
  );
}
