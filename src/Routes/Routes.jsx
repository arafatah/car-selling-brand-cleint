import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorElement />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    }
])

export default Routes;