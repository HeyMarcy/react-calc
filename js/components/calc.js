import React from 'react';
import Button from './button';
import InputField from './input-field';
import OutputField from './output-field';


export default class Calc extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputString: '',
      outputString: ''
    }
  }

  addInput(text) {
      console.log("add:", text);
  }

  onSubmit(event) {
    console.log("submit clicked");
  }

  render() {
    return(
      <div>
        <InputField displayInput={'0'}/>
        <OutputField output={this.state.outputString} />
        <Button text="1" buttonType='num'/>
        <Button text="2" buttonType='num'/>
        <Button text="3" buttonType='num'/>
        <Button text="4" buttonType='num'/>
        <Button text="5" buttonType='num'/>
        <Button text="6" buttonType='num'/>
        <Button text="7" buttonType='num'/>
        <Button text="8" buttonType='num'/>
        <Button text="9" buttonType='num'/>
        <Button text="0" buttonType='num'/>
        <Button text="+" buttonType='num'/>
        <Button text="-" buttonType='num'/>
        <Button text="x" buttonType='num'/>
        <Button text="/" buttonType='num'/>
        <Button text="=" buttonType='submit'/>
      </div>
    );
  }
}
