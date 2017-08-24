import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPlaylist extends Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const newValue = e.target.value
    this.setState({input: newValue})
  }

  handleSubmit(e) {
    console.log(this.state.input)
    e.preventDefault()
  }

  render () {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>New Playlist</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" onChange={this.handleChange} value={this.state.input} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success">Create Playlist</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewPlaylist
