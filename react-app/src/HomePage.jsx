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
