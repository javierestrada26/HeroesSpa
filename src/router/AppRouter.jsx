import { Navigate, createBrowserRouter } from "react-router-dom";
import {DcPage,MarvelPage,ErrorPage, SearchPage, HeroPage} from "../heroes";
import { HeroesApp } from "../HeroesApp";
import {LoginPage} from "../auth/pages/LoginPage"

export const getRoutes = ()=> createBrowserRouter([
    {
        path:'/',
        element:<HeroesApp/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'marvel',
                element: <MarvelPage/>
            },
            {
                path:'search',
                element:<SearchPage/>
            },
            {
                path:'dc',
                element:<DcPage/>
            },
            {
                path:'hero/:id',
                element:<HeroPage/>

            },
            {
                path: '/',
                element: <Navigate to={'/marvel'}></Navigate>
            }
        ]
    },
    {
        path: 'login',
        element: <LoginPage/>
    },
    {
        path: '*',
        element: <Navigate to={'/marvel'}></Navigate>
    }
])
