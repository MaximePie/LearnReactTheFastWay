# LearnReactTheFastWay

Une solution très simple et rapide pour apprendre React. 
Consultez la vidéo de démonstration [ici](). 

##  Première fonction en React

Pour vous lancer en React, prenez le CDN de la doc et collez le en tant que source sur un fichier HTML.

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Créez une div vide d'id 'root'

```html
<div id="root"></div>
```


Utilisez la méthode render en ciblant root pour afficher un texte, et voilà.

```html
<script type="text/babel">
  ReactDOM.render(<div>Bonjour</div>, document.getElementById("root"));
</script>
```

On peut également rendre des composants.
Pour créer notre premier composant, créer une fonction App, qui va renvoyer votre première structure JSX, vous pouvez y mettre tout le HTML que vous voulez.

```html
<script type="text/babel">
  function App() {
    return (
      <div>
        <h2>Bonjour React</h2>
        <p>Bonjour</p>
      </div>
    )
  }

  ReactDOM.render(<App/>, document.getElementById("root"));
</script>
```

## Nouveaux composants et props 

Créer d'autres composants en React en faisant passer des props

On crée un composant Bouton et un composant Formulaire.
On les génère dans notre projet.

On peut leur donner un style, celui de notre choix.

Pour rendre la programmation plus facile, on peut passer des props, qui permettent de différencier les composants.

On va donner une props text au bouton pour lui faire afficher le texte en question.

Dans Bouton, on va légèrement modifier l'affichage pour afficher le texte reçu.

On va lui donner une fonction à déclencher quand un clique dessus.

On va également donner une prop au composant Formulaire, qui contient la fonction à déclencher quand on voudra le soumettre.

Sur un gros projet, on aura beaucoup de composants. Alors il faut créer un projet React.

```jsx harmony

  function Button(props) {
    return (
      <button onClick={props.onClick} style={{border: "none", backgroundColor: "pink"}}>{props.text}</button>
    )
  }

  function Formulaire({onSubmit}) {
    return (
      <form style={{border: "solid"}} onSubmit={onSubmit}>
        <input type="text"/>
        <Button text="Envoyer" onClick={sendData}/>
      </form>
    );

    function sendData() {
      alert("Envoyer les données !");
    }
  }

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
```

## Créer une application React 

Sur un gros projet, on aura beaucoup de composants. Alors il faut créer un projet React.

Utilisez Create React App pour une webapp classique mais non référencée,

Next js ou Gatsby pour une webapp référencée.

Ensuite, lancez la commande suivante : 
`npx create react app mon-app && cd mon-app && yarn start`

Editez votre `src/App.js` de manière à ce qu'il ressemble à ceci : 

```js
import './App.css';


function Button(props) {
  return (
    <button onClick={props.onClick} style={{border: "none", backgroundColor: "pink"}}>{props.text}</button>
  )
}

function Formulaire({onSubmit}) {
  return (
    <form style={{border: "solid"}} onSubmit={onSubmit}>
      <input type="text"/>
      <Button text="Envoyer" onClick={sendData}/>
    </form>
  );

  function sendData() {
    alert("Envoyer les données !");
  }
}

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
```
