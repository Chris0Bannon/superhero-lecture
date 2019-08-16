import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import HeroList from '../HeroList/HeroList'
class App extends Component {

state = {
  heroList: [
    {
      superHeroName: 'Quail Dude',
      alias: 'Doug?',
      power: 'Under Pants',
      onDuty: true,
      awards: 0,
    },
    {
      superHeroName: 'MeatyManMan',
      alias: 'Chris 0',
      power: 'Manliest Meats',
      onDuty: false,
      awards: 0,
    },
  ],
 
}

componentDidMount() {
  console.log('app is loaded');
  this.getData()
}

getData(){
  this.setState({  //response
    heroList: [
      {
        superHeroName: 'Quail Dude',
        alias: 'Doug?',
        power: 'Under Pants',
        onDuty: true,
        awards: 0,
      },
      {
        superHeroName: 'MeatyManMan',
        alias: 'Chris 0',
        power: 'Manliest Meats',
        onDuty: false,
        awards: 0,
      },
    ],
  })
}

  render() {
    return (
      <div className="App">
        {/* {this.state} */}
        {/* {JSON.stringify(this.state)} */}
       <Header />
       <main>
          <HeroList heroList = {this.state.heroList}/>
        </main>
      </div>
    );
  }
}

export default App;
