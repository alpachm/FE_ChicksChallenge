import "./styles/searchInputStyles.css";

const SearchInput = () => {
    return (
        <div className="input search-input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
        </div>
    );
};

export default SearchInput;
