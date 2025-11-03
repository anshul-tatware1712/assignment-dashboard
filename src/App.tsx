import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Orders from "./Pages/Orders";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Orders />,
      },
    ],
  },
]);
const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
