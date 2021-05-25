import './App.css';
import HeroImage from './HeroImage/HeroImage';
import MainCard from './MainCard/MainCard';
import DashCard from './DashCard/DashCard';
import AboutCard from './AboutCard/AboutCard';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        product_data:  [
          {
            stand: 'Bamboo Stand',
            pledge: 'Pledge $25 or more',
            text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list",
            left: '101',
            button_data: 'Select Reward',
            isEnabled: true,
          },{
            stand: 'Black Edition Stand',
            pledge: 'Pledge $75 or more',
            text: 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            left: '64',
            button_data: 'Select Reward',
            isEnabled: true,
          },{
            stand: 'Mahogany Special Edition',
            pledge: 'Pledge $200 or more',
            text: 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            left: '0',
            button_data: 'Out of Stock',
            isEnabled: false,
          }        
        ],
        dash_data : {
        total_backed : '$89,914',
        total_target: '$100,000',
        total_backers: '5,007',
        days_left: 56,
        }
    }
  }
  render(){
    return (
      <div className="App">
        <HeroImage />
        <MainCard data = {this.state.product_data}/>        
        <DashCard data = {this.state.dash_data}/>
        <AboutCard data = {this.state.product_data} />
      </div>
    );
  }
}

export default App;
