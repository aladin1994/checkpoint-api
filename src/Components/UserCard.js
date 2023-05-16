import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const UserCard = ({ el, user }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{el != null ? el.name : user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{el != null ? el.username : user.username}</Card.Subtitle>
                    <Card.Text>
                        <div>
                            <h2>Adress:</h2>
                            <p>{el != null ? el.email : user.email}</p>
                            <p>{user != null ? user.address.street : null}</p>
                            <p>{user != null ? user.address.suite : null}</p>
                            <h3>Geo</h3>
                            <p>{user != null ? user.address.geo.lat : null}</p>
                            <p>{user != null ? user.address.geo.lng : null}</p>
                        </div>
                    </Card.Text>
                    {user == null ? <Card.Link as={Link} to={`/details/${el != null ? el.id : user.id}`} >More Details</Card.Link> : null}

                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
