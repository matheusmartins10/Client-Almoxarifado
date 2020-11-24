import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import SignIn from '../pages/SignIn/index'
import SignUp from '../pages/SignUp/index'
import DashBoard from '../pages/Dashboard/index'

import Route from './Route'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={DashBoard} isPrivate />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
