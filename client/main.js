import React from 'react';
import ReactDOM from 'react-dom'; //npm module
import {Meteor} from 'meteor/meteor'; //meteormodule
import {Tracker} from 'meteor/tracker'; //let us track Q and rerun code when Q is changed

import {Players, calculatePlayerPosition} from './../imports/api/players'; //--> mini mongo
import App from './../imports/ui/App';

const removePlayer = (playerId) => {
  Player.remove({_id: playerId});
};





//w8 4 dom to render
Meteor.startup(() => {    //--> the fun is only called once the dom is ready

  Tracker.autorun(() => {
    let players = Players.find({},{sort: {score: -1}}).fetch();
    let title = "SCORE KEEP";
  let positionedPlayers  = calculatePlayerPosition(players);
    ReactDOM.render(<App title={title} players ={positionedPlayers}/>, document.getElementById('app'));
  });

});
