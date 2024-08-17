import "./styles/titleComponentStyles.css";

interface Props {
    label: string;
}

const TitleComponent = (props: Props) => {
    return <h1>{props.label}</h1>;
};

export default TitleComponent;
