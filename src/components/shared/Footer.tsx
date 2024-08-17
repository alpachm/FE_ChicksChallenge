import "./styles/footerStyles.css";
import { banks_imgs, criptos } from "../../utils/baks_imgs";
import social_media_data from "../../utils/social_media_data";
import Divider from "./Divider";
import logo from "./../../assets/logo.png";
import { first, second, third } from "../../utils/footer_content";

const Footer = () => {
    const renderStars = () => {
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(<i className="fa-solid fa-star"></i>);
        }

        return <div>{stars.map((star) => star)}</div>;
    };

    return (
        <footer className="principal-footer">
            <div className="container-limit">
                <header>
                    <div>
                        {banks_imgs.map((item) => (
                            <img key={item} src={item} alt="" />
                        ))}
                    </div>
                    <div>
                        {criptos.map((item) => (
                            <img key={item} src={item} alt="" />
                        ))}
                    </div>
                    <h2>and 50+ more</h2>
                </header>

                <div className="social-media">
                    {social_media_data.map((item) => (
                        <div key={item.icon} style={{ background: item.color }}>
                            <i className={item.icon}></i>
                        </div>
                    ))}
                </div>

                <Divider />

                <div className="last-section">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <span>support@chicksgold.com</span>
                    </div>

                    <div className="footer-item">
                        <h1>{first.title}</h1>
                        {first.options.map((item) => (
                            <span>{item}</span>
                        ))}
                    </div>

                    <div className="footer-item">
                        <h1>{second.title}</h1>
                        {first.options.map((item) => (
                            <span>{item}</span>
                        ))}
                    </div>

                    <div className="footer-item">
                        <h1>{third.title}</h1>
                        {first.options.map((item) => (
                            <span>{item}</span>
                        ))}
                    </div>

                    <div className="starts-container">
                        {renderStars()}
                        <h2>Trustpilot Reviews</h2>
                    </div>
                </div>

                <div className="copyright">
                    <span>© 2017 - 2020 Chicksgold.com. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
