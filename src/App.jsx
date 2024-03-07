import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Home from "./screens/home.jsx";
import Settings from "./screens/settings";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
  )
}


export default App
