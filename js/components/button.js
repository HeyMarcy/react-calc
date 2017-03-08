import React from 'react';

export default function Button (props){
  return (
    <button onClick={(e) => {props.callback(e, props.text)}}>{props.text}</button>
  )
}
