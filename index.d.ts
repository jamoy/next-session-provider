import * as React from 'react';

export interface SessionProviderProps {
  children: React.ReactChildren;
  exported?: boolean;
}

declare class SessionProvider extends React.Component<SessionProviderProps, any> {}

export interface SessionContext {
  session: any;
  setSession: (key: string, value: any) => null;
}

declare function useSessionContext(): SessionContext;

declare module 'next-session-provider' {}
