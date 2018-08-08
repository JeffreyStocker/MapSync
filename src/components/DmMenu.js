import React from 'react';

export default function DmMenu(props) {
  return (
    <div className=" ">
      <button onClick={() => {props.toggleShowMapLoadScreen(true)}}>Set Map</button>
      <button>Hide Map</button>
      <button>Show Map</button>
    </div>
  )
}

// verticalDisplay LeftMenu