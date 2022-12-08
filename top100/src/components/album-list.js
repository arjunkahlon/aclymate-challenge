
import React from 'react';
import Album from './album';
import LoadSpinner from './loading-spinner';


export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      albums: [],
      searchView: false,
      searchStr: '',
      albumSearch: [],
      favoriteAlbums: []
    }
    this.processSearchInput = this.processSearchInput.bind(this);
    this.processSearch = this.processSearch.bind(this);
    this.favoriteAlbum = this.favoriteAlbum.bind(this);
    this.findAlbum = this.findAlbum.bind(this);

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

  processSearchInput(event) {
    this.setState({
      searchStr: event.target.value,
      isLoading: true
    })
    this.processSearch();
  }

  processSearch() {
    const searchResults = [];
    for (let i = 0; i < this.state.albums.length; i++) {
      if ((this.state.albums[i]['im:name'].label.toLowerCase()).includes(this.state.searchStr)) {
        searchResults.push(this.state.albums[i]);
      }
    }
    this.setState({
      searchView: true,
      albumSearch: searchResults,
      isLoading: false
    })
  }

  favoriteAlbum(event) {
    // console.log(event.target);
    event.target.classList.toggle('favorited-star');

    const favoritedAlbumsCopy = [...this.state.favoriteAlbums];
    const clickedAlbum = this.findAlbum(event.target.getAttribute('data-id'));
    // console.log(clickedAlbum);
    if (favoritedAlbumsCopy.includes(clickedAlbum)) {
      favoritedAlbumsCopy.splice(favoritedAlbumsCopy.indexOf(clickedAlbum), 1);
    } else {
      favoritedAlbumsCopy.push(clickedAlbum);
    }

    this.setState({
      favoriteAlbums: favoritedAlbumsCopy
    })
  }

  findAlbum(id) {
    for (let i = 0; i < this.state.albums.length; i++) {
      if (this.state.albums[i].id.attributes['im:id'] === id) {
        return this.state.albums[i];
      }
    }

  }

  render() {
    if (this.state.isLoading) {
      return (
        <LoadSpinner />
      )
    }

    const searchList = (this.state.searchView) ? this.state.albumSearch : this.state.albums;
    return(
      <div className='container'>
        <div className='row center'>
          <div className='col'>
            <div className='search-wrapper text-center p'>
              <input type="text" 
                     placeholder='Search Albums...' 
                     id='albums-search-bar' 
                     className='w-100'
                     value={this.searchStr}
                     onChange={this.processSearchInput}></input>
            </div>
          </div>
        </div>
        <div className='row center d-flex flex-wrap'>
          {
            searchList.map((album, index) => {
              return <div className='album-parent col-full col-sm-half col-md-third col-lg-fourth m-2' key={album.id.attributes['im:id']}>
                <Album album = {album} ranking = {index + 1} id={album.id.attributes['im:id']} favoriteAlbum = {this.favoriteAlbum}/>
              </div>
            })
          }      
        </div>
      </div>
    )
  } 
}

