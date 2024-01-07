import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestuarantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"

const Feed = React.lazy(() => import('./components/Feed'));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/feed",
        element:<Suspense fallback={<h1> Loding....</h1>}><Feed/></Suspense>
      },
      {
        path:"restuarants/:resId",
        element:<RestuarantMenu/>
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
