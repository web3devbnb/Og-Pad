import logo from "../img/common/logo.png";

export default function Header({ menuVisible, setMenuVisible }) {
    
    return (
        <header className={"header" + (menuVisible ? " opened" : "")}>
            <a href="/" className="header__logo">
                <img src={logo} alt="logo" className="header__logo-image" />
            </a>
            <button className={"header__mobile-button" + (menuVisible ? " active" : "")} onClick={() => setMenuVisible(!menuVisible)}>
                <span className="header__mobile-button-wrapper"></span>
            </button>
        </header>
    );
}
