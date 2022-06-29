import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import FeaturedShow from "./components/FeaturedShow";
import Row from './components/Row'


function App() {
    return (
        <div className="App">
            <Nav/>
            <FeaturedShow />


            <Row name="Netflix Originals" type="netflix"/>
            <Row name="Shows you might like" type="recommended"/>
            <Row name="Action" type="action"/>
            <Row name="Documentary" type="doc"/>


        </div>
    );
}

export default App;
