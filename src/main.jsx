/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import App from "./components/App";
import "./i18n/config";
import "./styles/global.css";
import "./styles/main.css";
import "./styles/viewTransitions.css";

const MyPoems = lazy(() => import("./pages/MyPoems"));
const Index = lazy(() => import("./pages/Index"));
const MyPoemsIndex = lazy(() => import("./pages/MyPoemsIndex"));
const Poem = lazy(() => import("./pages/Poem"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "/my-poems",
                element: <MyPoems />,
                children: [
                    { index: true, element: <MyPoemsIndex /> },
                    { path: ":id", element: <Poem /> },
                ],
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
);
