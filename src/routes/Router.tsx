import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Auth from "../layouts/Auth";
import Login from "../views/auth/Login";
import Landing from "../views/Landing";
import Register from "../views/auth/Register";
import Admin from "../layouts/Admin";
import NotFound from '../views/notFound';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<any>({ name: "simmy " } || null);

  let signin = (newUser: string, callback: VoidFunction) => {
    //   return fakeAuthProvider.signin(() => {
    //     setUser(newUser);
    //     callback();
    //   });
  };

  let signout = (callback: VoidFunction) => {
    //   return fakeAuthProvider.signout(() => {
    //     setUser(null);
    //     callback();
    //   });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Admin />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}
