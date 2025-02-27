import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const {pathname}= useLocation()
    
    return (
        <header className="header">
            <div className="logo">
            <Link to = "/">
                <img src="/src/assets/logo.png" />
            </Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link className= {pathname==="/"?"linkHover":""} to = "/">Accueil</Link></li>
                    <li><Link className= {pathname==="/about-us"?"linkHover":""} to = "/about-us">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
