import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Signin from "../pages/Signin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import Signup from "../pages/Signup"
import Blog from "../main/Blog";
import Culture from "../Categories/Culture";
import PostCreate from "../pages/PostCreate";
import Detail from "../Card/Detail";

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/detail/:slug' component={Detail} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/culture' component={Culture} />
                <Route exact path='/blog/sport' component={Culture} />
                <Route exact path='/blog/social' component={Culture} />
                <Route exact path='/blog/economy' component={Culture} />
                <Route exact path='/blog/technology' component={Culture} />
                <Route exact path='/blog/literature' component={Culture} />
                <Route exact path='/blog/education' component={Culture} />
                <Route exact path='/blog/philosophy' component={Culture} />
                <Route exact path='/blog/travel' component={Culture} />
                <Route exact path='/blog/other' component={Culture} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/create' component={PostCreate} />
                <Route exact path='/profile' component={Profile} />

            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
