import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Formulaire from "./Formulaire";




function App() {
  return (
    <div>
      <h2>Bonjour React</h2>
      <p>Bonjour</p>
      <Button text="Coucou" onClick={() => alert("Coucou depuis App")}/>
      <Formulaire onSubmit={submitForm}/>
    </div>
  )

  function submitForm(event) {
    event.preventDefault();
    console.log("Prêt à envoyer les données !");
  }
}

export default App;
