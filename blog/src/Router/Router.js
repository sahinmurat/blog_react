import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import React from 'react';
import Signup from '../pages/Signup'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";

function AppRouter() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/' component={Main} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
