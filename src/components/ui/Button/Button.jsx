import "./Button.css";

function Button({
    children,
    icon,
    variant = "primary",
}) {
    return (
        <button
            className={`button button--${variant}`}
        >
            {icon && (
                <span className="button__icon">
                    {icon}
                </span>
            )}

            <span className="button__label">
                {children}
            </span>
        </button>
    );
}

export default Button;