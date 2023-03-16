import { useState } from 'react';

import { useUser } from '../Context/UserContext';

function Profile() {
    const { user, setUser } = useUser();
    const [loading, setLoading] = useState(false);

    function handleLogin() {
        setLoading(true)
        setTimeout(() => {
            setUser({
                id: 1,
                username: "byz",
                bio: "lorem ipsum",
            });
            setLoading(false)
        }, 1500);
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            {
                !user &&
                <button onClick={handleLogin}>{loading ? "Loading..." : "Log In"}</button>
            }
            <br />
            <code>{JSON.stringify(user)}</code>

            <br />

            {
                user && <button onClick={handleLogout}>Log Out</button>
            }

        </div>
    )
}

export default Profile