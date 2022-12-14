import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register/Register";
import CheckOut from "../../Pages/Subject/CheckOut";
import Subject from "../../Pages/Subject/Subject";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            loader: () => fetch('https://pedagog-learning-assignment-server.vercel.app/subject-name'),
            element: <Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path: '/subject/:id',
            loader: ({params}) => fetch(`https://pedagog-learning-assignment-server.vercel.app/subject/${params.id}`),
            element: <Subject></Subject>
        },
        {
            path: '/courses',
            loader: () => fetch('https://pedagog-learning-assignment-server.vercel.app/subject-name'),
            element: <Courses></Courses>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/checkout/:id',
            loader: ({params}) => fetch(`https://pedagog-learning-assignment-server.vercel.app/checkout/${params.id}`),
            element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
        },
        {
            path: '/faq',
            element: <Faq></Faq>
        }
       ]
    }
])