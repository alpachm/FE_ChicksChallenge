import "./styles/homeTableStyles.css";
import FilterButton from "../HomeTable/FilterButton";
import data from "../../utils/data";
import Card from "./Card";
import Pagination from "../HomeTable/Pagination";

const HomeTable = () => {
    return (
        <div className="home-table container-limit">
            <header>
                Showing 20 from - 125
                <FilterButton />
            </header>

            <div className="container">
                {data.map((data) => (
                    <Card data={data} quantity={1} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default HomeTable;
