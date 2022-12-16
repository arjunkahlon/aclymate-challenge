import Card from 'react-bootstrap/Card';


export default function Album(props) {
    return (
        <Card className='border border-dark shadow-lg' style={{ width: '400px', height: '500px' }}>
            <Card.Header className='bg-danger bg-gradient'>
                <Card.Title className='text-light'>{`${props.ranking}. ${props.album['im:name'].label}`}</Card.Title>

            </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <img src={props.album['im:image'][2].label} alt={`${props.album['im:name'].label}`}/>
                    <h4 className='p-1'>{props.album['im:artist'].label}</h4>
                </div>
            </Card.Body>
            <Card.Footer className='border-top border-secondary'>
            <div className='text-start'>
                <p className='text-secondary'><b>Genre:</b> {props.album.category.attributes.label}</p>
                <p className='text-secondary'><b>Release Date:</b> {props.album['im:releaseDate'].attributes.label}</p>
                <p className='text-secondary'><b>Price:</b> {props.album['im:price'].label}</p>
                <div className='text-end'>
                    {
                        props.favoritedAlbum
                            ? (
                                <i className="bi bi-star favorite-star favorited-star fa-xl" data-id={props.id} onClick={props.favoriteAlbum}></i>
                            )
                            : (
                                <i className="bi bi-star favorite-star fa-xl" data-id={props.id} onClick={props.favoriteAlbum}></i>
                            )
                    }
                </div>
            </div>
            <div className='text-end'>
            </div>
            </Card.Footer>
        </Card>
    )
}