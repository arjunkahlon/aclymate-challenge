
import React from 'react';
import Album from './album';
import LoadSpinner from './loading-spinner';


export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      albums: []
      
    }
  }

  componentDidMount() {
    fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then((response) => response.json())
    .then(albumsList => {
      this.setState({
        albums: albumsList.feed.entry,
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
        <div className='row center'>
          <div className='col'>
            <div className='search-wrapper text-center p'>
              <input type="text" placeholder='Search Albums...' id='albums-search-bar' className='w-100'></input>
            </div>
          </div>
        </div>
        <div className='row center d-flex flex-wrap'>
          {
            this.state.albums.map((album, index) => {
              return <div className='col-full col-sm-half col-md-third col-lg-fourth m-2' key={album.id.attributes['im:id']}>
                <Album album = {album} ranking = {index + 1}/>
              </div>
            })
          }      
        </div>
      </div>
    )
    
    
  } 
}

