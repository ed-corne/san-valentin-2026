import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Game1 from "./pages/Game1";
import Menu from "./pages/menu";
import Letter from "./pages/Letter";
import TapToTap from "./pages/TapToTap";
import Form from "./pages/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "word-search",
        element: <Game1 />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "letter",
        element: <Letter />,
      },
      {
        path: "tap-to-tap",
        element: <TapToTap />,
      },
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
]);
