
import React from 'react';
import NavigationBar from './components/nav-bar'; 
import SongList from './components/song-list';
import './app.css';
import PageContainer from './components/page-container'

export default class App extends React.Component {



  render() {
    return (
      <>
        <NavigationBar />
        <PageContainer>
          <SongList />
        </PageContainer>
      
      </>      
    )
  } 

}

