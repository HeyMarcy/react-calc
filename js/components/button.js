import React from 'react';

export default function Button (props){
  return (
    <button id={props.text} onClick={(e) => {props.callback(e)}}>{props.text}</button>
  )
}
