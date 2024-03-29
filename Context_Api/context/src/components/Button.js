import { useTheme } from '../Context/ThemeContext';

function Button() {
    const { theme, setTheme } = useTheme();

    return <div>
        Active Theme: {theme}
        <br />
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
    </div>
}

export default Button