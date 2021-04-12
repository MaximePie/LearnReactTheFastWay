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


