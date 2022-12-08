
import React from 'react';
import NavigationBar from './components/nav-bar'; 
import AlbumList from './components/album-list';
import './app.css';
import PageContainer from './components/page-container'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default class App extends React.Component {



  render() {
    return (
      <>
        <NavigationBar />
        <PageContainer>
          <AlbumList />
        </PageContainer>
      
      </>      
    )
  } 

}

