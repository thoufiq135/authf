import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './login'
import Protected from './protected'
import Signup from './sign'
import Home from './home'
import {Contextprovider} from "./context"


function App() {

  const route=createBrowserRouter([
    {
      path:"/",
      element:<Home/>      
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
    {
      path:"/protected",
      element:<Protected/>
    }
  ])

  return (

    <Contextprovider>
      <RouterProvider router={route}/>
    </Contextprovider>



  )
}

export default App
