import React, { Component } from 'react'
import './App.scss'

const Button = (props) => {
  const handleClick = (e) => {
     
    const el = document.getElementById(e.target.id)
    const prevBackground = el.style.backgroundColor;
    const value = e.target.innerHTML;
    
    if (/\d|\./.test(value))
      el.style.backgroundColor = '#726e6e'
    else if (/x|\-|\+|\/|\=/.test(value))
      el.style.backgroundColor = '#0d4887'
    else
      el.style.backgroundColor = '#8e1515'
    
    setTimeout(() => (
      el.style.backgroundColor = prevBackground
    ), 100)
    
    props.onClick(e)
  }
  return(
    <div className='btn' id={props.id} onClick={handleClick}>{props.value}</div>
  ) 
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: '0',
      formula: '',
      isOperatorClicked: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    const input = e.target.innerHTML;
    
    switch(input) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        if (this.state.display === '0' || this.state.isOperatorClicked) {
          this.setState({
            display: input,
            isOperatorClicked: false
          })
        } else
          this.setState(prevState => ({
            display: prevState.display + input
          }))
        break
      case '.':
        this.setState(prevState => ({
          display: /\./.test(prevState.display) ? 
                      prevState.display :
                      prevState.display === '0' ? 
                        '0.' : 
                        prevState.display + input
        })) 
        break
      case '+':
      case '-':
      case '/':
      case 'x':
          this.setState(prevState => ({
            formula: prevState.isOperatorClicked ? 
                        `${prevState.formula.slice(0, prevState.formula.length - 1)} ${input}` :
                        `${prevState.formula} ${prevState.display} ${input}`,
            isOperatorClicked: true
          }))
        break
      case 'C':
        this.setState({
          display: '0',
          formula: ''
        });
        break
      case 'DEL':
        if (!this.state.isOperatorClicked)
          this.setState(prevState => ({
          display: prevState.display.length > 1 ? 
                      prevState.display.slice(0, prevState.display.length - 1) :
                      '0'
          }))
        break
      case '=':
        let expression = this.state.formula.replace(/x/g, '*') + this.state.display;
        expression = Math.round(1000000000 * eval(expression)) / 1000000000;
        this.setState({
          display: expression.toString(),
          formula: ''
        })
        break
    }
  }
  render() {
    return(
      <div className='container'>
        <div id='formula'>{this.state.formula}</div>
        <div id='display'>{this.state.display}</div>
        <div className='grid'>
          {btns.map(btn => <Button value={btn.value} id={btn.id} onClick={this.handleClick}/>)}
        </div>
      </div>
    )
  }
}

const btns = [
  {
    value: 'C',
    id: 'clear'
  },
  {
    value: 'DEL',
    id: 'delete'
  },
  {
    value: '/',
    id: 'divide'
  },
  {
    value: '7',
    id: 'seven'
  },
  {
    value: '8',
    id: 'eight'
  },
  {
    value: '9',
    id: 'nine'
  },
  {
    value: 'x',
    id: 'multiply'
  },
  {
    value: '4',
    id: 'four'
  },
  {
    value: '5',
    id: 'five'
  },
  {
    value: '6',
    id: 'six'
  },
  {
    value: '-',
    id: 'subtract'
  },
  {
    value: '1',
    id: 'one'
  },
  {
    value: '2',
    id: 'two'
  },
  {
    value: '3',
    id: 'three'
  },
  {
    value: '+',
    id: 'add'
  },
  {
    value: '0',
    id: 'zero'
  },
  {
    value: '.',
    id: 'decimal'
  },
  {
    value: '=',
    id: 'equals'
  }
]

export default App;
