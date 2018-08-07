import React, { Component }from 'react';
import Map from './map/map';
import DmMenu from './DmMenu';


export default class DM extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        DM

        <DmMenu />
        <Map />
      </div>
    )
  }
}