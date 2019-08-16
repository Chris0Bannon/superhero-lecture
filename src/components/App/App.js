import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

class App extends Component {

state = {

  heroList: [
    {
    superHeroName: 'Quail Dude',
    alias: 'Doug?',
    power: 'Under Pants',
    onDuty: true,
     },
    {
      superHeroName: 'MeatyManMan',
      alias: 'Chris 0',
      power: 'Manliest Meats',
      onDuty: true,
    },
  ],
}

  render() {

    let superHeroList = this.state.heroList.map( (hero) => {
      return (
                    <div>
                    <h2>{hero.superHeroName}</h2>
                    <p>Alias: {hero.alias}</p>
                    <p>Power: {hero.power}</p>
                   </div>)})

    return (
        
      <div className="App">
        {/* {this.state} */}
        {JSON.stringify(this.state)}
       <Header />
        <ul>
          {superHeroList}
        </ul>
      </div>
    );
  }
}

export default App;
