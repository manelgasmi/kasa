import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/src/assets/logo.png" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to = "/">Accueil</Link></li>
                    <li><Link to = "/about-us">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
