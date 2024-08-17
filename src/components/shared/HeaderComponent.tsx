import { useState } from "react";
import navbar_options from "../../utils/navbar_options";
import MenuButton from "../HeaderComponent/MenuButton";
import SigninButton from "../HeaderComponent/SigninButton";
import logo from "./../../assets/logo.png";
import "./styles/headerComponentStyles.css";
import OptionsMenu from "../HeaderComponent/OptionsMenu";

const HeaderComponent = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [selectedNavbarOption, setSelectedNavbarOption] = useState(0);

    return (
        <div className="header-container">
            <div className="left-container">
                <img src={logo} alt="chicks-gold-logo" className="logo" />
                <div className="header-divider"></div>
                <div className={`navbar ${showNavbar && "show-navbar"}`}>
                    <i
                        className="fa-solid fa-xmark cancel-icon"
                        onClick={() => {
                            setShowNavbar(false);
                            setSelectedNavbarOption(0);
                        }}
                    ></i>
                    {navbar_options.map((item, index) => (
                        <div key={index}>
                            <button
                                className="navbar-option"
                                onClick={() => {
                                    if (selectedNavbarOption === item.id) {
                                        setSelectedNavbarOption(0);
                                        return;
                                    }
                                    setSelectedNavbarOption(index + 1);
                                }}
                            >
                                <h2>{item.title}</h2>
                                <i className="fa-solid fa-angle-down"></i>
                            </button>
                            <OptionsMenu
                                options={item.options}
                                showOptions={selectedNavbarOption === item.id}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-container">
                <div className="right-children-container">
                    <div className="usd-container">
                        <h2>USD</h2>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="cart-container">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <h2>Cart</h2>
                        <h2>(5)</h2>
                    </div>
                </div>
                <div className="buttons-container">
                    <SigninButton onPress={() => {}} />
                    <MenuButton onPress={() => setShowNavbar(!showNavbar)} />
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
