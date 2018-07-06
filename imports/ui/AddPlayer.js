import React from 'react'
import {Players} from './../api/players'; //--> mini mongo






export default class AddPlayer extends React.Component {


  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    debugger;
    if(playerName){
      e.target.playerName.value = '';
      Players.insert({
        name:playerName ,
        score: this.props.score
      });
    };
  }

  render(){
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}> {/*expect a fun*/}
          <input className="form__input" type="text" name="playerName" id="na" placeholder="Player Name"></input>
          <button className="button">add player</button>
        </form>
      </div>

    );
  }


}
