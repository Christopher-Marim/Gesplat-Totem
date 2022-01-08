import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./hooks/auth";
import { StateProvider } from "./hooks/state";
import { CamScreen } from "./screens/CamScreen";
import { CompleteScreen } from "./screens/CompleteScreen";
import { HomeScreen } from "./screens/HomeScreen/index";
import { ProcessScreen } from "./screens/ProcessScreen";
import { SelectScreen } from "./screens/SelectScreen";
import { UserScreen } from "./screens/UserScreen";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route element={<HomeScreen />} path="/" />
            <Route element={<UserScreen />} path="/user" />
            <Route element={<CamScreen />} path="/cam" />
            <Route element={<CompleteScreen />} path="/finish" />
            <Route element={<ProcessScreen />} path="/process" />
            <Route element={<SelectScreen />} path="/select" />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
