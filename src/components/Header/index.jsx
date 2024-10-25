import Logo from "../../assets/images/logo.png";
import "./style.css";

export default function Header() {
    return (
        <>
            <header className="header-main">
                <div className="logo-title-div">
                        <img className="swanly-logo" alt="Swanly logo" src={Logo} />
                        <h1>Swanly</h1>
                </div>
                <nav className="header-topics">
                    <p className="header-topics">Home</p>
                    <p className="header-topics">Sobre nós</p>
                    <p className="header-topics">Contatos</p>
                </nav>
            </header>
        </>
    )
}