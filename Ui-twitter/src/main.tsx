import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'


import { RouterProvider } from 'react-router-dom';
import { Routers } from './routers';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
 <React.StrictMode>
   <RouterProvider router={Routers} />
  </React.StrictMode>,
)
