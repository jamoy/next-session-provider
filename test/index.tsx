import React, { useContext, useState } from 'react';

export const SessionContext = React.createContext(null);

export const useSessionContext = () => useContext(SessionContext);

export const SessionProvider = function(props: any) {
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
  const [isLoading, updateLoading] = useState(false);
  const [token, updateToken] = useState(null);
  const [scope, updateScope] = useState([]);

  function authenticate(d) {
    updateAuthenticated(d);
  }

  return { session, token, authenticate, isAuthenticated, isLoading, scope, updateSession, updateAuthenticated, updateScope };
}
