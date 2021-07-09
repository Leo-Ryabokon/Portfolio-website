import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

const TopBar = ( {menuOpen, setMenuOpen} ) => {
    return (
        <div className={"topBar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href={"#intro"} className="logo">LeoR.</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+7-(953)-323-95-15</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>leo.ryabokon@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;