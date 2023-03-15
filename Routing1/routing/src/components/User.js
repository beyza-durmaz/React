import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function User() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            {loading && <h3>Loading...</h3>}
            <ul>
                <h1>User {id}</h1>
                <code>{JSON.stringify(user)}</code>
            </ul>
            <br />
            <br />
            <Link to={`/users/user/${parseInt(id) + 1}`}>Next User {parseInt(id) + 1}</Link>
        </div>
    )
}

export default User;