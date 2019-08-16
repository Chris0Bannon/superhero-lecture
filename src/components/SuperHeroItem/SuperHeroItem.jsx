import React, { Component } from 'react';

class SuperHeroItem extends Component {


    state = {
        unMask: true,
    };

    toggleMask = () => {
        console.log('clik a duh button');
        this.setState({
            unmask: !this.state.unmask
        })
    }

    maskOrNoMask = () => {
        if(this.state.unmask){
            return <p> {this.props.hero.alias}</p>
        }else {
            return <p>Wouldn't you like to KKNOW</p>
        }
    }

    onOrOfDuty = () => {
        if(this.props.hero.onDuty){
            return <p>ON DUTE</p>
        }else {
            return <p>Naptime</p>
        }
    }



    render() {
        return (
            <div className = "hero">
                <h2>{this.props.hero.superHeroName}</h2>
                <div>ALias: {this.maskOrNoMask()}</div>
                <p>Power: {this.props.hero.power}</p>
                {this.onOrOfDuty(this.props.hero)}
                {/* { this.props.hero.onDuty && <p>ON DUTY!!</p> } */}
                {/* 
                {this.props.hero.onDuty ?
                <p> ON DUTY</p>:
                <p> SLeeping in</p>
                } */}
                <button onClick = {this.toggleMask}>Toggle Alias</button>




            </div>
        )
    }
}
export default SuperHeroItem;