import * as React from 'react';

export interface SessionProviderProps {
  children: React.ReactChildren;
  exported?: boolean;
}

declare class SessionProvider extends React.Component<SessionProviderProps, any> {}

declare module 'next-session-provider' {}
