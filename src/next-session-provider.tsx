import React, { useContext, useEffect, useState } from 'react';
import store from 'store2';

export const SessionContext = React.createContext(null);

export const useSessionContext = () => useContext(SessionContext);

export const SessionProvider = function (props: any) {
  if (props.exported === true) {
    return <>{props.children}</>;
  }
  const context = useContext(SessionContext);
  const session = useSessionStore();
  return (
    <SessionContext.Provider {...context} value={session}>
      {props.children}
    </SessionContext.Provider>
  );
};

function useSessionStore() {
  const [session, updateSession] = useState(store.get('__$$'));
  function setSession(key: string, value: any) {
    const sessionCopy = session;
    if (key && value) {
      sessionCopy[key] = value;
      updateSession(sessionCopy);
      store.set('__$$', sessionCopy);
    }
  }
  return { session, setSession };
}