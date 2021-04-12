import React from 'react';
import Button from "./Button";
import Avatar from "@material-ui/core/Avatar";

export default function Formulaire({ onSubmit }) {
  return (
    <form style={{border: "solid"}} onSubmit={onSubmit}>
      <Avatar>M</Avatar>
      <input type="text"/>
      <Button text="Envoyer" onClick={sendData}/>
    </form>
  );

  function sendData() {
    alert("Envoyer les données !");
  }
}
