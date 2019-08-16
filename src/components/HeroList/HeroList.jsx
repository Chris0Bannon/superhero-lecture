import React, { Component } from 'react';
import SuperHeroItem from '../SuperHeroItem/SuperHeroItem';


class HeroList extends Component {

    render() {

        let superHeroList = this.props.heroList.map((hero) => {
            return (
                
               <SuperHeroItem hero = {hero} />
            
               )})


        return (
           <div>
               {superHeroList}
           </div>
        )
    }
}
export default HeroList;