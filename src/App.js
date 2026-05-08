import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const data = {
      name: "silpa",
    };
    setUserInfo(data.name);
  }, []);
  return (
    <div className="app min-h-screen flex flex-col">
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />,
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
