import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserCard from './UserCard'
import Spinner from 'react-bootstrap/Spinner';

const MoreDeatils = () => {
    const { id } = useParams()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => setUser(res.data))
            .then(() => setLoading(false))
    }, [])
    console.log(user)
    return (
        <div>
            {
                loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    :
                    <UserCard key={user.id} user={user} />
            }
        </div>
    )
}

export default MoreDeatils
