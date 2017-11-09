import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

import {config} from '../config/app.config.jsx';
import Auth from '../service/auth.service.jsx';

import Home from './home/home.component.jsx';
import Store from './store/store.component.jsx';
import Comment from './comment/comment.component.jsx';
import  My from './my/my.component.jsx';
import Navigation from './navigation/navigation.component.jsx';

const auth = new Auth();

class Routing extends Component {
    render() {
        console.log("Auth===",auth);
        return(
            <HashRouter>
            <div>
                <Navigation auth={auth} />
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path="/store"  component={Store}/>
                    <Route path="/comment" component={Comment} />
                    <Route path="/my" component={My} />
                 </main>
            </div>
          </HashRouter>
        )
    }
}
export default Routing