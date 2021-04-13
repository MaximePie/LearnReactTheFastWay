import React from 'react';

export default function Button(props) {
  return (
    <button disabled={props.isBlocked} onClick={props.onClick} style={{border: "none", backgroundColor: "pink"}}>{props.text}</button>
  )
}

