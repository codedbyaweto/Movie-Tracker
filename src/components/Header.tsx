import { Link } from "react-router-dom";
import logo from "../assets/png-transparent-m-net-movies-film-television-channel-others-miscellaneous-television-text.png"; // import the logo

const Header = () => {
    return (
        <header className="app-header">
            <Link to="/">
                <img src={logo} alt="MovieTracker Logo" className="logo" />
            </Link>
        </header>
    );
};

export default Header;