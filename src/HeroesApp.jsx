import { Outlet } from "react-router-dom"
import { Navbar } from "./ui"
import { AuthProvider } from "./auth"



export const HeroesApp = () => {
  return (
    <AuthProvider>
    <Navbar/>
    <Outlet/>
    </AuthProvider>
  )
}
