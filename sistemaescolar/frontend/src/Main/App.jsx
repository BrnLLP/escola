import React from 'react'
import axios from 'axios'
import './App.css'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Login from '../components/Users/Login'
import Cadstro from '../components/Users/Cadastro'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default props =>
<BrowserRouter>
<body>
<div className='app'>
<Nav />
<Routes />
<Main />
</div>
</body>
</BrowserRouter>