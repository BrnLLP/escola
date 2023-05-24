import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from '../components/Home/Home'
import Login from '../components/Users/Login'
import Tabela from '../components/Users/Tabela'
import Cadastro from '../components/Users/Cadastro'
export default props =>
<Routes>
    <Route exact path="/" element ={<Home/>}  />
    <Route path="Login" element ={<Login/>}  />
    <Route path="Tabela" element ={<Tabela/>}  />
    <Route path="Cadastro" element ={<Cadastro/>}  />
</Routes>
