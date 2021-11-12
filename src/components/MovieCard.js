import React from 'react'
import {Card, Button} from 'react-bootstrap';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({movie}) {
    const IMG = IMG_URL+movie.poster_path;
    console.log(IMG)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={IMG} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.overview}
                </Card.Text>
                <Button variant="primary">Like</Button>
                <Button variant="primary">block</Button>
                <Button variant="primary">...</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
