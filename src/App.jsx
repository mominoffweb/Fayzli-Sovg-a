import React from "react";
import Toplam from "./components/Toplam";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Xarid from "./components/Xarid";
import Korzinka from "./components/Korzinka";
import Biz from "./components/Biz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/top",
      element: <Toplam />,
    },
    {
      path: "/xarid",
      element: <Xarid />,
    },
    {
      path: "/korzinka",
      element: <Korzinka />,
    },
    {
      path: "/Biz",
      element: <Biz />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
