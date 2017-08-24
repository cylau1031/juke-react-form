import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewPlaylist extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      disabled: true,
      edited: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const newValue = e.target.value
    this.setState({ input: newValue, edited: true })
    if (this.state.input.length === 0 || this.state.input.length > 16) {
      this.setState({ disabled: true });
    } else {
      this.setState({ disabled: false });
    }
  }

  render() {
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit={
          (e) => {
            this.props.handleSubmit(this.state.input, e)
          }
        }>
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
                <button type="submit" className="btn btn-success" disabled={this.state.disabled}>Create Playlist</button>
                {(this.state.edited && this.state.disabled) && <div className="alert alert-warning">Please enter a name</div>}
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default NewPlaylist
