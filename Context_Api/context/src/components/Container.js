import Button from './Button';
import Header from './Header';
import Profile from './Profile';

import { useTheme } from '../Context/ThemeContext';

function Container() {
    const {theme} = useTheme();

    return (
        <div className={`App ${theme}`}>
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile />
        </div>
    )
}

export default Container