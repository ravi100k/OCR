import React, { Component } from 'react';
// import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/**
 * Import Components
 */
import Home from './Components/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import GitDashboard from './Components/GitDashboard/GitDashboard.jsx';
import NavigationBar from './Components/NavigationBar/NavigationBar.jsx';
import store from './Store/store';
/**
 * Ant design Css import
 */
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <NavigationBar/>
                        <Route excat path="/home" component={Home} />
                        <div className="container">
                            <Switch>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/gitDashboard" component={GitDashboard}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
