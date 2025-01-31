import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";



import "./index.css";
import { Router } from "./routes/Router";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={Router} />

    </div>
  </React.StrictMode>
);
