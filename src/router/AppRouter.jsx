import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import {DcPage,MarvelPage,ErrorPage, SearchPage, HeroPage} from "../heroes";
import { HeroesApp } from "../HeroesApp";
import {LoginPage} from "../auth/pages/LoginPage"
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

const router =  createBrowserRouter([
    {
        path:'/',
        element:<HeroesApp/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'marvel',
                element: <PrivateRouter><MarvelPage/></PrivateRouter>
            },
            {
                path:'search',
                element:<PrivateRouter><SearchPage/></PrivateRouter>
            },
            {
                path:'dc',
                element:<PrivateRouter><DcPage/></PrivateRouter>
            },
            {
                path:'hero/:id',
                element:<PrivateRouter><HeroPage/></PrivateRouter>

            },
            {
                path: '/',
                element: <PrivateRouter><Navigate to={'/marvel'}></Navigate></PrivateRouter>
            },
            {
                path: 'login',
                element: <PublicRouter><LoginPage/></PublicRouter>
            },
            
            {
                path: '*',
                element: <PrivateRouter><Navigate to={'/marvel'}></Navigate></PrivateRouter>
            }
        ]
    },

])

function AppRouter() {
    return (
        <RouterProvider router={router}/>
    )
  }
   
  export default AppRouter
