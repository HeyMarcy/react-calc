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

    this.addInput = this.addInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  addInput(e, num) {
    console.log("add input");
    console.log(num);
    this.setState((prevState) => {
      return {inputString: prevState.inputString+num};
    });
    console.log(this.state.inputString);
  }

  onSubmit(e, num) {
    console.log("submit");
    console.log(e.target.id);
  }

  render() {
    return(
      <div>
        <InputField displayInput='0' />
        <OutputField output={this.state.outputString} />
        <Button text="1" callback={this.addInput}/>
        <Button text="2" callback={this.addInput}/>
        <Button text="3" callback={this.addInput}/>
        <Button text="4" callback={this.addInput}/>
        <Button text="5" callback={this.addInput}/>
        <Button text="6" callback={this.addInput}/>
        <Button text="7" callback={this.addInput}/>
        <Button text="8" callback={this.addInput}/>
        <Button text="9" callback={this.addInput}/>
        <Button text="0" callback={this.addInput}/>
        <Button text="+" callback={this.addInput}/>
        <Button text="-" callback={this.addInput}/>
        <Button text="x" callback={this.addInput}/>
        <Button text="/" callback={this.addInput}/>
        <Button text="=" callback={this.onSubmit}/>
      </div>
    );
  }
}
