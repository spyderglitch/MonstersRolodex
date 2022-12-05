import { Component } from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users, filteredMonsters: users}
    },
    ));
  }

  handleSearchInput = (event) =>{ 
    this.setState(()=> {return {searchField: event.target.value.toLocaleLowerCase() }})
  }

  render() {

    const { monsters, searchField } = this.state;
    const { handleSearchInput } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
    <div className="App">
      <h1>Monsters Rolodex </h1>
      <SearchBox className='search-box' handleSearchInput={handleSearchInput} />
      <CardList monsters={filteredMonsters} />

    </div>)
  };
}

export default App;
