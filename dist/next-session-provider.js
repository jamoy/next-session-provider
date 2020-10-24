'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.SessionProvider = exports.useSessionContext = exports.SessionContext = void 0;
var react_1 = __importStar(require('react'));
var store2_1 = __importDefault(require('store2'));
exports.SessionContext = react_1.default.createContext(null);
exports.useSessionContext = function () {
  return react_1.useContext(exports.SessionContext);
};
exports.SessionProvider = function (props) {
  if (props.exported === true) {
    return react_1.default.createElement(react_1.default.Fragment, null, props.children);
  }
  var context = react_1.useContext(exports.SessionContext);
  var session = useSessionStore();
  return react_1.default.createElement(
    exports.SessionContext.Provider,
    __assign({}, context, { value: session }),
    props.children
  );
};
function useSessionStore() {
  var _a = react_1.useState(store2_1.default.get('__$$')),
    session = _a[0],
    updateSession = _a[1];
  function setSession(key, value) {
    var sessionCopy = session;
    if (key && value) {
      sessionCopy[key] = value;
      updateSession(sessionCopy);
      store2_1.default.set('__$$', sessionCopy);
    }
  }
  return { session: session, setSession: setSession };
}
