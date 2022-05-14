import { Link } from "react-router-dom";
export function AppHeader({ }) {
    return (
        <header className="app-header">
            <nav className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/toys">Toys</Link></li>
            </nav>
        </header>);
}