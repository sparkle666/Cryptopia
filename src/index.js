import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom'
import store from "./app/store"
import {Provider} from "react-redux"

ReactDOM.render(
    // Pass in a store to  the provider
<Router>
    <Provider store = {store} >
        <App /> 
    </Provider>
</Router>, document.getElementById("root"))