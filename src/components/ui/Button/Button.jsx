import "./Button.css";

function Button({
  children,
  icon,
  variant = "primary",
  active = false,
  className = "",
  ...props
}) {
  const classNames = [
    "button",
    `button--${variant}`,
    active ? "button--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={classNames}
      {...props}
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