import React, { Component } from 'react';
import InputForm from './Inputs';
import Header from './Header';
import Expression from './Expression';
import Results from './Results';

var parse = require('expression-parser/parse');

class App extends Component {

  state = {
    exp: '',
    decResult: 0,
    binResult: '0',
    hexResult: '0',
    isInvalidInput: false,
  }

  getBinaryToDecimal = (num) => {
    return Number.parseInt(num, 2); //binary string to decimal integer
  }

  getDecimalToBinary = (num) => {
    return num.toString(2);    //integer num to binary string
  }

  getDecimalToHex = (num) => {
    return num.toString(16);  //decimal to hex
  }

  addOrSubTwoNumbers = (num1, num2, op) => { //recieves two binary strings Adds or subtracts
    num1 = this.getBinaryToDecimal(num1);
    num2 = this.getBinaryToDecimal(num2);
    if(op === 'add') return num1 + num2; //Returns decimal integer
    return num1 - num2;
  }

  handleInputChange = (e) => {
    this.setState({exp: e.target.value});
    var inputLetters = e.target.value.toString();
    var ast = parse(inputLetters);
    var re = /[^01\+\- ]/;
    var notAllowed = re.test(inputLetters);
      if(inputLetters.length === 0){
        this.setState({
          decResult: 0,
          binResult: '0',
          hexResult: '0',
          isInvalidInput: false
        });
      }
      else if(notAllowed) {
        this.setState({
          isInvalidInput: true
        });
      }
      else if(!notAllowed){
        this.setState({
          isInvalidInput: false
        });
      }
      else {
        this.setState({
          isInvalidInput: true
        });
      }


    try{
      var input = ast.children[0].node;
      if(input === 'literal' && !this.state.isInvalidInput) { //check if single num
        var loneNumber = this.getBinaryToDecimal(ast.children[0].template);
        this.setState({
          decResult: loneNumber,
          binResult: this.getDecimalToBinary(loneNumber),
          hexResult: this.getDecimalToHex(loneNumber)
        });
      } else if(input === 'func' && !this.state.isInvalidInput) { //if two nums
          var template = ast.children[0].template;
          template = template.replace(new RegExp(' ', 'g'), '');
          var firstNum;
          var secondNum;
          var final;
          if(template === "#+#"){
            firstNum = ast.children[0].children[0].template;
            secondNum = ast.children[0].children[1].template;
            final = this.addOrSubTwoNumbers(firstNum, secondNum, 'add');
          }else if(template === "##"){
            firstNum = ast.children[0].children[0].template;
            secondNum = ast.children[0].children[1].children[0].template;
            final = this.addOrSubTwoNumbers(firstNum, secondNum, 'sub');
          }
          console.log(final);
          this.setState({
            decResult: final,
            binResult: this.getDecimalToBinary(final),
            hexResult: this.getDecimalToHex(final)
          });
      }else if(ast.children[0].children.length >= 3){
        this.setState({
          isInvalidInput: true
        });
      }
    }catch(e){
      if(inputLetters.length > 0){
      this.setState({
        isInvalidInput: true
      });
        }
      }

  }

  render() {
    return (
      <div className="App">
        <Header />

        <InputForm handleInputChange={this.handleInputChange}/>

        <Expression expression={this.state.exp} />

        <Results
          exp={this.state.exp}
          decResult={this.state.decResult}
          binResult={this.state.binResult}
          hexResult={this.state.hexResult}
          isInvalidInput={this.state.isInvalidInput}
        />

      </div>
    );
  }
}

export default App;
