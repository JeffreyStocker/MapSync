import React, { Component } from 'react';
import autobind from '../utilties';

export default class UploadBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
      file: null
    };
    autobind.call(this, this.handleClick, this.setFile, this.handleFileUpload, this.handleSubmit);
  }

  setFile (e) {
    this.setState({file: e.target.value})
  }

  handleFileUpload(e) {
    // e.preventDefault();
  }

  handleClick(e) {
    e.stopPropagation();
    if (e.currentTarget.id !== 'uploadBox') {
      this.props.toggleShowMapLoadScreen(false);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('e:', e);
    console.log('state', this.state);
    this.state.file && this.props.setMap(this.state.file)

  }

  render () {
    return (
      <div>
        <div className="topOverlay flex-Center transparentBlackBackground" id="overlayForOffClick" onClick={this.handleClick}>
          <div className="topOverlayCenter upload" id="uploadBox" onClick={this.handleClick}>
            <form onSubmit={this.handleSubmit} className="backgroundWhite" >
              <input type="file" name="pic" accept="image/*" onChange={this.setFile} />
              <input type="submit" />
            </form>
          </div>
        </div>
        {/* <div className="topOverlay topOverlayExit" onClick={() => {props.toggleShowMapLoadScreen(false)}} /> */}

      </div>
    )
  }
}

// onChange={handleFileUpload}