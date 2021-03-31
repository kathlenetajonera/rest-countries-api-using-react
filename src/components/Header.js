import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext); //value from ThemeContext Provider
    
    const handleThemeToggle = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    return (
        <header className="header">
            <h1 className="header__title">Where in the world?</h1>
            <p className="header__toggle" onClick={handleThemeToggle}>Dark Mode</p>
        </header>
    );
}
 
export default Header;