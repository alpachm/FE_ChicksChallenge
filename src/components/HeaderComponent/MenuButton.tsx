import "./styles/menuButtonsStyles.css";

interface Props {
    onPress: () => void;
}

const MenuButton = (props: Props) => {
    return <i onClick={props.onPress} className="fa-solid fa-ellipsis-vertical"></i>;
};

export default MenuButton;
