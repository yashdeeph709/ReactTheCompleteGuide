import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  constructor(props){
	super(props);
	this.state = { 
		persons:[
			{ name:'Max',age:29 },
			{ name:'Manu',age:29 },
			{ name:'Stephanie',age:26 }
		]
	};
	this.handleClick=this.handleClick.bind(this);
	this.nameChangeHandler = this.nameChangeHandler.bind(this);
  }
  handleClick = () => {
	  console.log('Was clicked!');
	  this.setState({persons:[
			{ name:'yashdeep',age:29 },
			{ name:'Manu',age:29 },
			{ name:'Stephanie',age:26 }
		]});
  }
  nameChangeHandler = (event)=>{
	  this.setState({
		  persons:[
			{ name:'max',age:29 },
			{ name:event.target.value,age:29 },
			{ name:'Stephanie',age:26 }
		]			   
	 });
  }

  render() {
	  const handlerHandle1 = (e) => this.handleClick("max");
	  const handlerHandle2 = (e) => this.handleClick("muller");
	  const style={
		  backgroundColor:'white',
		  font:'inherit',
		  border: '1px solid blue',
		  padding: '8px'
	  }	
	  return (
	  	<div className="App">
	  		<h1> Hi, I'am a React App</h1>
			<h2> This is working </h2>
			<button style={style} onClick={handlerHandle2}>Switch Name</button>
			<Person 
				age={this.state.persons[0].age}
				name={this.state.persons[0].name} />
			<Person 
				age={this.state.persons[1].age} 
				name={this.state.persons[1].name} 
				click={handlerHandle1}
		       		changed={this.nameChangeHandler} />
			<Person age={this.state.persons[2].age} 
				name={this.state.persons[2].name} />
	  	</div>
	  );
  }
}

export default App;
