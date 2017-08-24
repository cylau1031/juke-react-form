import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlaylist from './NewPlaylist';
import axios from 'axios';

export default class Main extends Component {

  constructor() {
    super()
    this.state = {
      playlists: []
    }
    this.handleSubmitNewPlaylist = this.handleSubmitNewPlaylist.bind(this)
  }

  componentDidMount() {
    axios.get('/api/playlists/')
      .then(res => res.data)
      .then(result => {
        this.setState({ playlists: result });
      });

  }

  handleSubmitNewPlaylist(input, e) {
    axios.post('/api/playlists/', { name: input })
      .then(res => res.data)
      .then(result => {
        console.log("SUBMT RESULT", result);
        // let temp = this.state.playlists;
        // temp.push(result);
        // this.setState({ input: '' });
      });
    e.preventDefault()
  }


  render() {

    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlists={this.state.playlists} />
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/new-playlist" render={() => <NewPlaylist handleSubmit={this.handleSubmitNewPlaylist} />} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
