import "./styles/filterButtonStyles.css";

const FilterButton = () => {
    return (
        <div className="filter-button">
            <i className="fa-solid fa-arrow-down-z-a"></i>
            <section>
                <span>Sort By</span>
                <h2>Featured</h2>
            </section>
            <i className="fa-solid fa-caret-down"></i>
        </div>
    );
};

export default FilterButton;
