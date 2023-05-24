import React from 'react'
import './App.css'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Login from '../components/Users/Login'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

export default props =>
<BrowserRouter>
<div className='app'>
<Nav />
<Routes />
<Main />
</div>
</BrowserRouter>