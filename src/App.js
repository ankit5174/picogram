import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import BasePage from './pages/base-page/base-page-conatiner';
import RedirectPage from './pages/redirect-page/redirect-page-conatiner';
import Home from './pages/home/home-conatiner';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to PicoGram</h1>
                </header>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={BasePage}/>
                        <Route exact path="/redirect" component={RedirectPage}/>
                        <Route exact path="/home" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
