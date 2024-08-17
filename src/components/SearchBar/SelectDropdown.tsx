import "./styles/selectDropdownStyles.css";
import IconSword from "../../assets/icons/IconSwod";
import games_options from "../../utils/games_options";
import { useState } from "react";

const SelectDropdown = () => {
    const [showOptionsMenu, setshowOptionsMenu] = useState(false);

    const renderOptionsMenu = () => {
        return (
            <div className={`menu-options ${showOptionsMenu && "show-menu-optons"}`}>
                {games_options.map((game) => (
                    <h2 key={game.id}>{game.name}</h2>
                ))}
            </div>
        );
    };

    const handleMenu = () => {
        console.log("Se eejcuta");
        setshowOptionsMenu(!showOptionsMenu);
    };

    return (
        <div className="select-dropdown input" onClick={handleMenu}>
            <div>
                <IconSword fill="#fff" />
                <h2>Select a game</h2>
            </div>
            <i className="fa-solid fa-caret-down"></i>
            {renderOptionsMenu()}
        </div>
    );
};

export default SelectDropdown;
