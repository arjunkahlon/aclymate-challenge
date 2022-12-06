
import React from 'react';
import Song from './song';
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
    return(
      <div className='container'>
        <div className='row d-flex flex-wrap'>
          {
            this.state.songs.map(song => {
              return <div className='col-full col-sm-half col-md-third col-lg-fourth m-2' key={song.id.attributes['im:id']}>
                <Song song = {song} />
              </div>
            })
          }      
        </div>
      </div>
    )
    
    
  } 
}

