import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import Signup from "../pages/Signup"
import Blog from "../main/Blog";
import Culture from "../pages/Culture";
import PostCreate from "../pages/PostCreate";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/culture' component={Culture} />
                <Route exact path='/create' component={PostCreate} />

            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
