# Favorite an Album 
## User may click on the star icon of an album card to add an album to the favorites list.

Arjun Kahlon


## User Story

- User is provided with a list of albums cards for the top 100 Albums (provided by the iTunes API)
- Each album card has a clickable star icon
- User can click the star icon to add this album to the favorites list. A red star indicates a favorited album.
- The favorites list can be rendered by clicking on the Favorites Toggle Button
- User can click a favorited star again to unfavorite the album

## Reasoning for Feature

I believe a Favorites Feature was appropriate here as the API generates an overwhelming quantity of albums. A user may want to only want to select a few albums from this collection to listen to later. This is indicated by the popularity of playlists and favorites on music streaming applications. 

## Development

- The AlbumList Component makes an HTTP Request to the iTunes API and parses the JSON response into the state property, albums.
- The Album Component returns JSX for each individual album card. This component is returned within the map method of the albums array in the AlbumList Component.
- The Album Component conditionally checks if the current album is stored in the favorites array. If this album has been favorited, the star icon is rendered in red, indicating a favorites album. Otherwise the star icon is rendered in black
- Clicking on the star icon toggles the favorite. Clicking on a favorited album toggles the favorite-star from red to black, and removes the album from the favoriteAlbum array. Clicking an unfavorited album pushed the album into the favoriteAlbums array. 
- The AlbumList Component has a favorite toggle button at the top of the page. Clicking this button toggled the favorites view, rendering only albums contained within the favoriteAlbums array.

