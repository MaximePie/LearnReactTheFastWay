import React from 'react';
import Button from "./Button";

export default function Formulaire({ onSubmit }) {
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
