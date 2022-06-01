import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// layouts

import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth";

// views without layouts

import Landing from "./views/Landing";
import Profile from "./views/Profile";
import Index from "./views/Index";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/admin/Dashboard";
import Maps from "./views/admin/Maps";
import Settings from "./views/admin/Settings";
import Tables from "./views/admin/Tables";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {/* add routes with layouts */}
          <Route path="admin" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="maps" element={<Maps />} />
            <Route path="settings" element={<Settings />} />
            <Route path="tables" element={<Tables />} />
          </Route>
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* add routes without layouts */}
          <Route path="landing" element={<Landing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
