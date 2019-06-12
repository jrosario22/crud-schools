import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import CampusListing from './campusListing';
import StudentListing from './studentListing';

const homePage = (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/campusListing">Campuses</Link></li>
                <li><Link to="/studentListing">Students</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/campusListing" component={CampusListing} />
                <Route path="/studentListing" component={StudentListing} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(homePage, document.getElementById('root'));


