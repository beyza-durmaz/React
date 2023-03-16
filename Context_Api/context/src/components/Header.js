import { useTheme } from '../Context/ThemeContext';

function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            Header: {theme}
            <br />
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
        </div>
    )
}

export default Header