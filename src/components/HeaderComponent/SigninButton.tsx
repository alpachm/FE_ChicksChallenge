import "./styles/signinButtonStyles.css";

interface Props {
    onPress: () => void;
}

const SigninButton = (props: Props) => {
    return (
        <button className="signin-button" onSubmit={props.onPress}>
            <h3>Sign in</h3>
            <i className="fa-solid fa-user"></i>
        </button>
    );
};

export default SigninButton;
