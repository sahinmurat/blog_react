import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Signin from "../pages/Signin";
import Signup from "../pages/Signup"
import Blog from "../main/Blog";
import PostCreate from "../pages/PostCreate";
import Detail from "../Card/Detail";
import Sport from '../Categories/Sport'
import Politic from '../Categories/Politic'
import Social from '../Categories/Social'
import Economy from '../Categories/Economy'
import Technology from '../Categories/Technology'
import Literature from '../Categories/Literature'
import Education from '../Categories/Education'
import Philosophy from '../Categories/Philosophy'
import Travel from '../Categories/Travel'
import Other from '../Categories/Other'

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/detail/:slug' component={Detail} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/blog/sport' component={Sport} />
                <Route exact path='/blog/politic' component={Politic} />
                <Route exact path='/blog/social' component={Social} />
                <Route exact path='/blog/economy' component={Economy} />
                <Route exact path='/blog/technology' component={Technology} />
                <Route exact path='/blog/literature' component={Literature} />
                <Route exact path='/blog/education' component={Education} />
                <Route exact path='/blog/philosophy' component={Philosophy} />
                <Route exact path='/blog/travel' component={Travel} />
                <Route exact path='/blog/other' component={Other} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/create' component={PostCreate} />

            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
