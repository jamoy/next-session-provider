import React, { useContext, useState } from 'react';
export var SessionContext = React.createContext(null);
export var useSessionContext = function () { return useContext(SessionContext); };
export var SessionProvider = function (props) {
    if (props.exported === true) {
        return <>{props.children}</>;
    }
    var context = useContext(SessionContext);
    var session = useSessionStore();
    return (<SessionContext.Provider {...context} value={session}>
      {props.children}
    </SessionContext.Provider>);
};
export function useSessionStore() {
    var _a = useState(null), session = _a[0], updateSession = _a[1];
    var _b = useState(false), isAuthenticated = _b[0], updateAuthenticated = _b[1];
    var _c = useState(false), isLoading = _c[0], updateLoading = _c[1];
    var _d = useState(null), token = _d[0], updateToken = _d[1];
    var _e = useState([]), scope = _e[0], updateScope = _e[1];
    function authenticate(d) {
        updateAuthenticated(d);
    }
    return { session: session, token: token, authenticate: authenticate, isAuthenticated: isAuthenticated, isLoading: isLoading, scope: scope, updateSession: updateSession, updateAuthenticated: updateAuthenticated, updateScope: updateScope };
}
