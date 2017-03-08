import React from 'react';

export default function Button (props){
  return (
    <button type="button" onClick={console.log('Hello World!')}>{props.text}</button>  
  )
}
