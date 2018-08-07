import React, { Component } from 'react';
import Entry from './components/EntryChoice';
import DM from './components/DM';
import Player from './components/Player';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 100,
      level: 'select'
    };

    this.setLevel = this.setLevel.bind(this);
    this.setZoom = this.setZoom.bind(this);
  }

  setZoom (zoomLevel) {
    this.setState(prev => {
      {zoom: zoomLevel}
    })
  }

  setLevel(newLevel) {
    this.setState({level: newLevel});
  }

  render() {
    return (
      <div>
        {this.state.level === "DM" && <DM zoom={this.state.zoom} />}
        {this.state.level === "Player" && <Player zoom={this.state.zoom} />}
        {this.state.level === "select" &&  <Entry setLevel={this.setLevel}/>}
      </div>
    )
  }
}