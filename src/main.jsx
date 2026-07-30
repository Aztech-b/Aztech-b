import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import "./i18n/config";
import App from "./components/App";
import MyPoemsIndex from "./pages/MyPoemsIndex";
import Poem from "./pages/Poem";
import "./styles/global.css";
import "./styles/main.css";
import "./styles/viewTransitions.css";

const MyPoems = lazy(() => import("./pages/MyPoems"));
const Index = lazy(() => import("./pages/Index"));

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
