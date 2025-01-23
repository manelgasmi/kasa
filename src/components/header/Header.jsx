import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="src/assets/logo.png" />
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about-us">A propos</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
