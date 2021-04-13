import React, {useEffect} from 'react';
import Button from "./Button";
import Avatar from "@material-ui/core/Avatar";

export default function Formulaire({ onSubmit }) {

  // Le mot de passe doit contenir la lettre a
  // Le pseudo doit faire au moins 4 caractères de long

  const [pseudo, setPseudo] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [errorMessages, setErrorMessages] = React.useState([]);

  useEffect(checkPassword, [pass]);

  useEffect(checkPseudo, [pseudo]);

  return (
    <form style={{border: "solid"}} onSubmit={onSubmit}>
      <Avatar>M</Avatar>
      {errorMessages.map(message => <p>{message}</p>)}
      <p>Infos : {pseudo} - {pass}</p>
      <input type="text" name="pseudo" value={pseudo} onChange={(event) => {setPseudo(event.target.value)}}/>
      <input type="text" name="pass" value={pass} onChange={(event) => {setPass(event.target.value)}}/>
      <Button text="Envoyer" onClick={sendData} isBlocked={pseudo === '' || pass === ''}/>
    </form>
  );

  function checkPassword() {
      let updatedErrors = [...errorMessages];
      const passwordError = 'Le mot de passe doit au moins contenir la lettre a';
      updatedErrors = updatedErrors.filter(error => error !== passwordError);
      const aRegex = /a/i;
      if (!aRegex.test(pass)) {
        updatedErrors.push(passwordError);
      }
      setErrorMessages(updatedErrors);
  }

  function sendData() {
    alert("Envoyer les données !");
  }

  function checkPseudo () {
    let updatedErrors = [...errorMessages];
    const pseudoError = 'Le pseudo est trop court, 4 caractères minimum';
    updatedErrors = updatedErrors.filter(message => message !== pseudoError);
    if (pseudo.length < 4) {
      updatedErrors.push(pseudoError);
    }

    setErrorMessages(updatedErrors);
  }
}
