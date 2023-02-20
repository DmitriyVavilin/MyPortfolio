import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main/>
        <Skills/>
    </div>
  );
}

export default App;

//https://preview.themeforest.net/item/spirit-portfolioresume-html-template-for-developers-programmers-and-freelancers/full_screen_preview/17094383?_ga=2.243555141.1736568102.1676814821-200242335.1676814821