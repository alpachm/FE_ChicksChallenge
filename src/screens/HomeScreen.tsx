import "./styles/homeScreenStyles.css";
import SearchBar from "../components/HomeScreen/SearchBar";
import HomeTable from "../components/HomeScreen/HomeTable";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <div className="homescreen-container">
                <SearchBar />
                <HomeTable />
            </div>
        </div>
    );
};

export default HomeScreen;
