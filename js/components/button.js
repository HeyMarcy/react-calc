import React from 'react';

export default function Button (props){
  /*const buttonType = props.addInput ? 'number' : 'operator';*/
  console.log(props);
  if (props.buttonType === 'num'){
    return <button onClick={() => this.addInput(props.text)}>{props.text}</button>
  } else if (props.buttonType === 'submit'){
    return <button onClick={() => this.onSubmit}>{props.text}</button>
  }

}
