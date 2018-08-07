import React from 'react';

export default function EntryChoice (props) {
  return (
    <div>
      <button onClick={() => {props.setLevel('DM')}}>
        DM
      </button>
      <br/>
      <button onClick={() => {props.setLevel('Player')}}>
        Player
      </button>
    </div>
  );
}