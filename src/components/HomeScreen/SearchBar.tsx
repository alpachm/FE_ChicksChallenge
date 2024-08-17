import "./styles/searchBarStyles.css";
import SearchInput from "../SearchBar/SearchInput";
import SelectDropdown from "../SearchBar/SelectDropdown";
import TitleComponent from "../shared/TitleComponent";
import { dropdown_options } from "../../utils/small_dropdown_options";
import SmallSelectDropdown from "../SearchBar/SmallSelectDropdown";
import { useState } from "react";

const SearchBar = () => {
    const [selectedDropdownId, setSelectedDropdownId] = useState(0);

    const handleClick = (index: number, optionId: number) => {
        console.log({
            se: selectedDropdownId,
            op: optionId,
        });
        if (selectedDropdownId === optionId) {
            setSelectedDropdownId(0);
            return;
        }
        setSelectedDropdownId(index + 1);
    };

    return (
        <div className="container-limit searchbar-container">
            <TitleComponent label="Condimentum consectetur" />
            <div className="inputs-container">
                <SelectDropdown />
                <SearchInput />
                <div className="selects-container">
                    {dropdown_options.map((option, index) => (
                        <div
                            className="small-dropdown-container"
                            onClick={() => handleClick(index, option.id)}
                        >
                            <SmallSelectDropdown
                                key={option.id}
                                option={option}
                                showMenuOption={selectedDropdownId === option.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
