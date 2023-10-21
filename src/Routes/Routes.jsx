import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import ErrorElement from "../Components/ErrorElement/ErrorElement";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import AddProduct from "../Page/Home/Navbar/AddProduct/AddProduct";
import ShowProduct from "../Page/ShowProduct/ShowProduct";
import BrandDetails from "../Page/BrandDetails/BrandDetails";
import SingleDetails from "../Page/SingleDetails/SingleDetails";
import UpdateProduct from "../Page/UpdateProduct/UpdateProduct";
import PrivetRoute from "./PrivetRoute";
import Cart from "../Page/Cart/Cart";

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
            },
            {
                path: "/addProduct",
                element: <PrivetRoute><AddProduct /></PrivetRoute> 
            },
            {
                path: "updateProduct/:id",
                element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute> ,
                loader: ( {params} ) => fetch(`https://back-end-sand-tau.vercel.app/cars/${params.id}`)
            },
            {
                path: "/showProduct",
                element: <PrivetRoute><ShowProduct /></PrivetRoute>,
                loader: () => fetch('https://back-end-sand-tau.vercel.app/cars')
            },
            {
                path: "/brandDetails",
                element: <BrandDetails></BrandDetails>
            },
            {
                path: "/singleDetails/:id",
                element: <PrivetRoute><SingleDetails></SingleDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://back-end-sand-tau.vercel.app/cars/${params.id}`)
            },
            {
                path: "/myCart",
                element: <PrivetRoute><Cart/></PrivetRoute> ,
            }

        ]
    }
])

export default Routes;