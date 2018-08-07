import React from 'react';
import MapMenu from './menu'
import Overlay from './overlay'

export default function Map(props) {
  return (
    <div className="map">
      {/* map goes here */}
      map
      <Overlay />
      <MapMenu />
    </div>
  )
}