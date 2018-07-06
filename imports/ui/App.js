import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';


export default class App extends React.Component{
  render(){
    return (
      <div>
        <TitleBar title={this.props.title} subTitle='created by Abhishek'/>
        <div className="wrapper">
          <PlayerList players = {this.props.players}/>
          <AddPlayer score={0}/>
        </div>

      </div>

    );
  }
}

App.PropTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};