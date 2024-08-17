import "./styles/smallSelectDropdownStyles.css";
import { IDropdown } from "../../interfaces/small_dropdown_options.interface";

interface Props {
    option: IDropdown;
    showMenuOption: boolean;
}

const SmallSelectDropdown = (props: Props) => {
    const renderOptionsMenu = () => {
        return (
            <div className={`option-menu ${props.showMenuOption && "show-option-menu"}`}>
                {props.option.options.map((option) => (
                    <h2 key={option.id}>{option.option}</h2>
                ))}
            </div>
        );
    };

    return (
        <div className="input small-dropdown">
            <div className="left-side">
                <i className={props.option.ico}></i>
                <section>
                    <span>{props.option.subtitle}</span>
                    <span>{props.option.title}</span>
                </section>
            </div>
            <i className="fa-solid fa-caret-down"></i>
            {renderOptionsMenu()}
        </div>
    );
};

export default SmallSelectDropdown;
