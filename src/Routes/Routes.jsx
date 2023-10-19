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
                loader: ( {params} ) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: "/showProduct",
                element: <ShowProduct />,
                loader: () => fetch('http://localhost:5000/cars')
            },
            {
                path: "/brandDetails",
                element: <BrandDetails></BrandDetails>
            },
            {
                path: "/singleDetails/:id",
                element: <SingleDetails></SingleDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            {
                path: "/myCart",
                element: <Cart/>,
            }

        ]
    }
])

export default Routes;