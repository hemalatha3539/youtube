import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import Cardbody from './cardbody';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Nextvedio from './nextvedio';
const Container=()=>{
  return <div className='red'>
    <Navbar/>
    <Outlet/>
  </div>

}
const ways=createBrowserRouter([
  {
    path:"/",
    element:<Container/>,
    children:[
      {
        path:"/",
        element:<Cardbody/>
      },
      {
        path:"/vedio/:id",
        element:<Nextvedio/>
      }
    ]
  }
  


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={ways} />);

