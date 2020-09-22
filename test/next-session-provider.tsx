import React, { useContext, useEffect, useState } from 'react';

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

export function useSessionStore() {
  const [session, updateSession] = useState(null);
  const [isAuthenticated, updateAuthenticated] = useState(false);

  useEffect(() => {
    // get from storage
    return () => {};
  }, []);

  function authenticate(d) {
    updateAuthenticated(d);
    updateSession({});
  }

  return { session, authenticate, isAuthenticated };
}
