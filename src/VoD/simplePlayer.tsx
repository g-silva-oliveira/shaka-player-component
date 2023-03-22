/**
 * 
 */
import React from 'react';
const shaka = require('shaka-player/dist/shaka-player.ui.js');

export interface ISimplePlayer { };

const SimplePlayer: React.FunctionComponent<ISimplePlayer> = props => {
  return (
    <div>simplePlayer</div>
  )
};

export default SimplePlayer;
