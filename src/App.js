import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Layout as AntLayout, Typography, Space } from "antd"
// import {Navbar} from "./components"
import './App.css'
import {LayoutMain} from "./components/Layout"
import Home from "./components/Home"
import Exchanges from "./components/Exchanges"
import News from "./components/News"
import Cryptocurrencies from "./components/Cryptocurrencies"
import {Empty} from "antd"
import Cryptodetails from './components/Cryptodetails'
import "./App.css"

export default function App() {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<LayoutMain />}> 
                    <Route path = "home" element = {<Home/>} />
                    <Route path = "exchanges" element = {<Exchanges/>} />
                    <Route path = "cryptocurrencies" element = {<Cryptocurrencies/>} />
                    <Route path = "news" element = {<News/>} />
                    <Route path = "cryptocurrencies/:cryptoID" element = {<Cryptodetails/>} />
                    <Route path = "*" element = {<Empty/>} />
                </Route>
            </Routes>
        </div>
    )
}

