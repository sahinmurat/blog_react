import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useContext } from 'react';
import Navbar from '../components/Navbar'
import Navbr from '../components/Navbr'
import Footer from '../components/Footer'
import Signin from "../pages/Signin";
import Signup from "../pages/Signup"
import Blog from "../main/Blog";
import PostCreate from "../pages/PostCreate";
import PostUpdate from "../pages/PostUpdate";
import Detail from "../Card/Detail";
import Category from '../Categories/Category'
import { AuthContext } from '../App'

function AppRouter() {
    const { currentuser } = useContext(AuthContext);
    return (
        <Router>
            <Navbar />
            {/* <Navbr /> */}
            <Switch>
                <Route exact path='/detail/:slug' component={currentuser ? Detail : Signin} />
                <Route exact path='/update/:slug' component={PostUpdate} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/:category' component={Category} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/create' component={currentuser ? PostCreate : Signin} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
