import Card from 'react-bootstrap/Card';

export default function Song(props) {
    return (
        <Card className='border border-dark shadow-lg' style={{ width: '400px', height: '500px' }}>
            <Card.Header className='bg-dark bg-gradient'>
                <Card.Title className='text-light'>{props.song['im:artist'].label}</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className='text-center'>
                    <img src={props.song['im:image'][2].label} alt={`${props.song['im:name'].label}`}/>
                    <h4 className='p-1'>{props.song['im:name'].label}</h4>
                </div>
            </Card.Body>
            <Card.Footer>
            <div className='text-start'>
                <p><b>Genre:</b> {props.song.category.attributes.label}</p>
                <p><b>Release Date:</b> {props.song['im:releaseDate'].attributes.label}</p>
                <p><b>Price:</b> {props.song['im:price'].label}</p>
            </div>
            <div className='text-end'>
            </div>
            </Card.Footer>
        </Card>
    )
}

// export default function Song(song) {
//     return (
//         <div>
//             <h2>{song.title.label}</h2>
//             <p>{song['im:artist'].label}</p>
//             <p>{song.category.attributes.label}</p>
//             <img src={song['im:image'][2].label}/>
//             <p>{song['im:releaseDate'].attributes.label}</p>

//             <p>{song['im:price'].label}</p>
//         </div>
//     )
// }