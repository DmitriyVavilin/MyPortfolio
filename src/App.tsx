import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {Works} from "./components/Works/Works";
import {Contacts} from "./components/Contacts/Contacts";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

//https://preview.themeforest.net/item/spirit-portfolioresume-html-template-for-developers-programmers-and-freelancers/full_screen_preview/17094383?_ga=2.243555141.1736568102.1676814821-200242335.1676814821