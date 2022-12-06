
import React from 'react';
import LoadSpinner from './loading-spinner';


export default class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      songs: []
      
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then((response) => response.json())
    .then(songList => {
      this.setState({
        songs: songList.feed.entry,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadSpinner />
      )
    }
    
  } 
}

