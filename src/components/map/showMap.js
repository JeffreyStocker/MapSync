import React, { Component } from 'react';

import L from 'leaflet';


export default class Map extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    // var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    var i = new Image();
    i.src = '1491619762861.jpg';
    console.log('height:', i.height);


    var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -3,
      maxZoom: 1
    });
    var bounds = [[0,0], [ i.height, i.width]];
    var image = L.imageOverlay('1491619762861.jpg', bounds).addTo(map);
    // var image = L.imageOverlay('HiddenShrineDM_Small.jpg', bounds).addTo(map);
    map.fitBounds(bounds);
    // map.setView( [70, 120], 1);
  }

  render() {
    return (
      <div>
        <div id="map"/>
      </div>
    )
  }
}
