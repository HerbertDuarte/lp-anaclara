import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Rotas

import Works from "./routes/Works";
import Home from "./routes/Home";
import Email from "./routes/Email";
import Thanks from "./routes/Thanks";
<<<<<<< Updated upstream
import NotFound from "./routes/NotFound";
=======
import About from "./routes/About"
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "works",
        element: <Works />,
      },
      {
        path: 'email',
        element: <Email/>
      },
      {
        path:'thanks',
        element: <Thanks/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
