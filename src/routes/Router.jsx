import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Layout";
import { Children } from "react";
import Home from "../pages/home";
import Layout from "../Layout/Layout";


export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      Children:[
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);