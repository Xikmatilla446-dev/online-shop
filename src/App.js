import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HeaderComponent from './components/header/header.component';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/home-page/home-page.component';


import './App.css';



class App extends React.Component{
    constructor(){
        super();
    }


    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    </Switch>
            </div>
        )
    };
}

export default App;
