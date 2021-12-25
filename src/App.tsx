import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { StateProvider } from "./hooks/state";
import { HomeScreen } from "./screens/HomeScreen/index";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<HomeScreen />} path="/pages/home" />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
