import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./components/App";
import "./styles/global.css";
import "./styles/main.css";

const MyPoems = lazy(() => import("./pages/MyPoems"));
const Index = lazy(() => import("./pages/Index"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Index /> },
            { path: "/my-poems", element: <MyPoems /> },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
);
