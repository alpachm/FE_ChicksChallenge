interface Props {
    options: string[];
    showOptions: boolean;
}

const OptionsMenu = (props: Props) => {
    return (
        <div className={`options-container ${props.showOptions && "show-options-container"}`}>
            {props.options.map((option, index) => (
                <h2 key={index}>{option}</h2>
            ))}
        </div>
    );
};

export default OptionsMenu;
