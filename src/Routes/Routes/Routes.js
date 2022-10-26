import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Login/Register/Register";
import Subject from "../../Pages/Subject/Subject";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/blog',
            element: <Blog></Blog>
        },
        {
            path: '/subject/:id',
            loader: ({params}) => fetch(`http://localhost:5000/subject/${params.id}`),
            element: <Subject></Subject>
        },
        {
            path: '/courses',
            loader: () => fetch('http://localhost:5000/subject-name'),
            element: <PrivetRoute> <Courses></Courses></PrivetRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
       ]
    }
])