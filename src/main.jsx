import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./redux/store"; // Import your Redux store
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter
import NavigationMenu from "./components/NavigationMenu";
import FavoritesList from "./components/FavoritesList.jsx";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
