import './App.css';
import Button from "./Button";
import Formulaire from "./Formulaire";
import HomePage from "./HomePage";
import React from "react";
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/test'>Test</NavLink>
          <NavLink to='/form'>Form</NavLink>
        </div>
        <Switch>
          <Route path='/' exact>
            <HomePage/>
          </Route>
          <Route path='/test'>
            <h2>Bonjour React</h2>
            <p>Bonjour</p>
            <Button text="Coucou" onClick={() => alert("Coucou depuis App")}/>
          </Route>
          <Route path='/form'>
            <Formulaire onSubmit={submitForm}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )

  function submitForm(event) {
    event.preventDefault();
    console.log("Prêt à envoyer les données !");
  }
}

export default App;
