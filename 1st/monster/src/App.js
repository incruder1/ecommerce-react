import React , { Component }  from 'react';
 import  {Cardlist}  from './component/card-list/card-list.component';
import './App.css';
import {SearchBox} from './component/card-list/search-box/search-box.component.jsx' ;
class App extends Component { 
  constructor(){
super()
this.state={ 
  monster: [ ] ,
  SearchField: ""
       };
 
      }
  componentDidMount(){
    fetch(" https://jsonplaceholder.typicode.com/users")
    .then(response=>  response.json())
    .then(users=>  this.setState({monster:users}))
  }
 handleChange=(e)=> {
 
 this.setState({SearchField:e.target.value}); }
 
 
  render(){
const {monster, SearchField }=this.state;
const filteredMonster= monster.filter(monster=>
  monster.name.toLowerCase().includes(SearchField.toLowerCase())
  );

  return (
    <div className="App"> 
    <SearchBox handleChange={this.handleChange}  placeholder="Search Monster" />
    <Cardlist  monsters={filteredMonster} />
     
     </div>
  );
} };

export default App;
