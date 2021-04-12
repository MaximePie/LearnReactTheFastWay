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
