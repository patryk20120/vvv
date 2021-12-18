function Button({text, link}){
    return (
        <a className="buttonStyle" href={link}>
            {text}
        </a>
    );
}

export default Button;