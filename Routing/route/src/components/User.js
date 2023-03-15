import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
            <h2>User Detail</h2>

            {
                loading && <h3>Loading...</h3>
            }

            {
                !loading && <code>{JSON.stringify(user)}</code>
            }

            <br />
            <br />

            <Link to={`/users/${parseInt(id) + 1}`} >
                Next User ({parseInt(id) + 1})
            </Link>

        </div>
    )
}

export default User