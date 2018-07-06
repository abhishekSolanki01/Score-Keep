import React from 'react';
import {Players} from './../api/players';


export default class Player extends React.Component {
  render(){
  let ply = this.props.player;
  let itemClassName = `item item--position-${ply.position}`;
    return (
        <div key ={ply._id} className={itemClassName}>
          <div className="player">
            <div>
              <h3 className="player__name">{ply.name}</h3>
              <p className="player__stats">
                {ply.position} place - {ply.score} point(s).
              </p>
            </div>
            <div className="player__actions">
              <button className="button buttons--round" onClick={() => Players.update(ply._id, {$inc:{score: 1}})
              }>+1</button>                                                         {/* {_id:playersList.id}--> playersList._id*/}
              <button className="button buttons--round" onClick={() => Players.update(ply._id, {$inc:{score:-1}})
              }>-1</button>
              <button className="button buttons--round" onClick={() => Players.remove(ply._id)}>X</button>            {/*shot form of*/}
            </div>
          </div>
        </div>
    );
  }
}

Player.PropTypes = {
  player: React.PropTypes.object.isRequired
};
