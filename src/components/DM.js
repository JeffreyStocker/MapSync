import React, { Component } from 'react';
import Map from './map/map';
import DmMenu from './DmMenu';
import LoadNewMap from './Upload';
import IO from 'socket.io/lib/client';
import autobind from '../utilties';

export default class DM extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showMapLoadScreen: false,
      mapLocation: null,
    }
    autobind.call(this, this.toggleShowMapLoadScreen, this.setMap)
    // this.toggleShowMapLoadScreen = this.toggleShowMapLoadScreen.bind(this);
  }

  setMap (mapLocation) {
    this.setState({mapLocation})
  }

  toggleShowMapLoadScreen (state) {
    if (state === undefined) {
      this.setState({showMapLoadScreen: !this.state.showMapLoadScreen});
    } else if (!!state) {
      this.setState({showMapLoadScreen: true});
    } else {
      this.setState({showMapLoadScreen: false});
    }
  }

  render () {
    return (
      <div>
        DM
        {this.state.showMapLoadScreen && <LoadNewMap toggleShowMapLoadScreen={this.toggleShowMapLoadScreen} setMap={this.setMap} />}
        <DmMenu toggleShowMapLoadScreen={this.toggleShowMapLoadScreen}/>
        <Map mapLocation={this.state.mapLocation} />
      </div>
    )
  }
}