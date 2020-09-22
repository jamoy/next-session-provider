import {useSessionContext} from "../";
import {useRouter} from "next/router";

export default function Login() {
  const { authenticate } = useSessionContext();
  const router = useRouter();

  async function doAuth() {
    authenticate(true);
    router.push('/protected');
  }

  return (
    <div>
      login with a session
      <div><button onClick={() => doAuth()}>login</button></div>
    </div>
  )
}