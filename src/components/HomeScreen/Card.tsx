import "./styles/cardStyles.css";
import IData from "../../interfaces/data.interface";

interface Props {
    data: IData;
    quantity: number;
}

const Card = (props: Props) => {
    return (
        <div className="card">
            <header>
                <div className="left-side">
                    <section>
                        <div
                            className="circle"
                            style={{
                                background: props.data.status === "On sale" ? "#06D001" : "#FF0000",
                            }}
                        ></div>
                        <span>{props.data.status === "On sale" ? "On sale" : "Not for sale"}</span>
                    </section>
                    <div
                        className="stock-container"
                        style={{
                            borderColor: props.data.status === "On sale" ? "#06D001" : "#FF0000",
                        }}
                    >
                        <span
                            style={{
                                color: props.data.status === "On sale" ? "#06D001" : "#FF0000",
                            }}
                        >
                            {props.data.status === "On sale" ? "In stock" : "Not of stock"}
                        </span>
                    </div>
                </div>
                <div className="right-side">
                    {props.quantity}
                    <section>
                        <i className="fa-solid fa-caret-up"></i>
                        <i className="fa-solid fa-caret-down"></i>
                    </section>
                </div>
            </header>

            <div className="icon-container">
                <img src={props.data.icon} alt="" />
            </div>

            <div className="name-container">
                <h2>{props.data.name}</h2>
                <img src={props.data.logo} alt="" />
            </div>

            <div className="price-container">
                <h2>{props.data.offer_price}</h2>
                <span>{props.data.price}</span>
            </div>

            <p className="paragraph">{props.data.description}</p>

            <footer>
                <button>Details</button>

                <button>
                    Add
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </footer>
        </div>
    );
};

export default Card;
