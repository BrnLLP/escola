import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from '../components/Home/Home'
import Login from '../components/Users/Login'
export default props =>
<Routes>
    <Route exact path="/" element ={<Home/>}  />
    <Route path="Login" element ={<Login/>}  />
</Routes>
