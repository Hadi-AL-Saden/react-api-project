import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Weather from '../Weather'
import Login from './Login'
import Signup from './Signup'


function AppRouter() {
  return (
<BrowserRouter>

<Routes>

<Route path='/home' element={<Home/>}/>
<Route path='/weather' element={<Weather/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
{/* <Route path='' element={a}/> */}


</Routes>


</BrowserRouter>
)
}

export default AppRouter