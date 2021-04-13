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

Puis séparer les différents composants dans d'autres fichiers créés à cet effet. 

```js
 
// Formulaire.jsx

import React from 'react';
import Button from "./Button";

export default function Formulaire(props) {
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

```


## Installer une bibliothèque de composants 

Installer Material-UI
`yarn add @material-ui/core`

Plus d'informations ici : https://material-ui.com/

Générer un composant Material-ui : 

```js
import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export default function Avatar() {
  return (
      <Avatar>M</Avatar>
  );
```


## Gestion des states 

Plus d'informations ici : https://reactjs.org/docs/hooks-reference.html#usestate

Créer un state 

```js
  const [homeText, setHomeText] = React.useState('Bonjour les copains');
}
```

Afficher un state 

```js
import React from 'react';

export default function HomePage({}) {

  const [homeText, setHomeText] = React.useState('Bonjour les copains');

  return (
    <div className="HomePage">
      {homeText}
    </div>
  );
}

```

Modifier un State 

`homeText + 'Haha'` est la nouvelle valeur du state. 

```js
import React from 'react';

export default function HomePage({}) {

  const [homeText, setHomeText] = React.useState('Bonjour les copains');

  return (
    <div className="HomePage">
      {homeText}
      <button onClick={updateText}>Modifier</button>
    </div>
  );

  function updateText() {
    setHomeText(homeText + 'Haha');
  }
}
```

## Déclencher des effets de bord 

Je vais compter le nombre de fois où j'ai cliqué grâce à un autre state.
Au bout de trois, on va afficher un message pour dire "c'est bon lààà".
À chaque fois qu'on clique sur le bouton, le state text change. On va créer un morceau de code à déclencher quand ce state change grâce à UseEffect.
Quand text change, je veux modifier nombredmDeClick pour lui ajouter 1.

Quand nbClick change, on va déclencher un autre morceau de code avec un autre effect.
Quand nbClick change, s'il est supérieur ou égal à 3, on aimerait afficher un message d'erreur et empêcher l'utilisateur de cliquer encore.

On va créer un state shouldErrorMessageBeDisplayed, false de base, qui va passer à True si on tape trois fois.

On va modifier notre rendu de manière à ce que si isLimitReached est égal à True, on affiche un paragraphe avec un message, et on va désactiver le bouton.


```jsx harmony
import React, {useEffect} from 'react';

export default function HomePage({}) {

  const [homeText, setHomeText] = React.useState('Bonjour les copains');
  const [numberOfTimesClicked, setNumberOfTimesClicked] = React.useState(-1);
  const [shouldErrorMessageBeDisplayed, setErrorMessageDisplayState] = React.useState(false);

  useEffect(() => {
    if (numberOfTimesClicked > 3) {
      setErrorMessageDisplayState(true);
    }
  }, [numberOfTimesClicked]);

  useEffect(() => {
    setNumberOfTimesClicked(numberOfTimesClicked + 1);
  }, [homeText])

  return (
    <div className="HomePage">
      <h2>Cliqué : {numberOfTimesClicked}</h2>
      {shouldErrorMessageBeDisplayed ? "C'est bon làààà" : <p>{homeText}</p>}
      <button disabled={shouldErrorMessageBeDisplayed} onClick={updateText}>Modifier</button>
    </div>
  );

  function updateText() {
    setHomeText(homeText + 'Haha');
  }
}
```


## Installer un système de routage 

Plus d'informations : https://reactrouter.com/

Installez le router, 

`npm install react-router-dom`

Mettre le router en place 

```js
// App.jsx 

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
          <Route path='/cats' exact>
            <CatsPage/>
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

```

## Communiquer avec une API 

Pour communiquer avec l'api, on utilise `fetch` de Javascript. 
Documentation de l'api : https://docs.thecatapi.com/

On utilise cette méthode personnalisée pour effectuer la récupération :

```js
  function fetchCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=15').then(response => response.json()).then(response => {
      console.log(response);
      setCat(response);
    })
  }
```

Cette méthode met à jour la liste des chats avec `setCats`. 


```js
//CatsPage.jsx 

import React, {useEffect} from 'react';

export default function CatsPage() {

  const [cats, setCat] = React.useState([]);

  useEffect(fetchCatPicture, []);

  return (
    <div className="CatsPage">
      C'est le component CatsPage
      {cats.map(cat => (
          <div>
            <img style={{height: "90px", width: "90px"}} src={cat.url} alt=""/>
          </div>
        )
      )}
      <img src={cats} alt=""/>
    </div>
  );

  function fetchCatPicture() {
    fetch('https://api.thecatapi.com/v1/images/search?limit=15').then(response => response.json()).then(response => {
      console.log(response);
      setCat(response);
    })
  }
}
``
