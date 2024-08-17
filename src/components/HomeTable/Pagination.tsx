import "./styles/paginationStyles.css";
import pagination_data from "../../utils/pagination_data";
import { useState } from "react";

const Pagination = () => {
    const [selectedPag, setSelectedPag] = useState(1);

    const handleClick = (index: number) => {
        setSelectedPag(index + 1);
    };

    return (
        <div className="pagination">
            <div className="left-arrow button">
                <i className="fa-solid fa-chevron-left"></i>
            </div>

            <div className="numbers">
                {pagination_data.map((item, index) => (
                    <div
                        className="button"
                        key={item.id}
                        style={{ background: selectedPag === item.id ? "#5762D5" : "transparent" }}
                        onClick={() => handleClick(index)}
                    >
                        {item.value}
                    </div>
                ))}
            </div>

            <div className="right-arrow button">
                <i className="fa-solid fa-chevron-right"></i>
            </div>
        </div>
    );
};

export default Pagination;
