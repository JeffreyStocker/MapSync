import React, { Component } from 'react';

import Overlay from './overlay'
import ShowMap from './showMap';

export default class Map extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="map">
        map
        <ShowMap />
        {this.props.mapLocation && <img src={this.props.mapLocation} />}
        <Overlay />
      </div>
    )
  }
}
