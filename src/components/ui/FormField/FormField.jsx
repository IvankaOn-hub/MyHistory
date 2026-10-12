import "./FormField.css";

function FormField({
  label,
  htmlFor,
  error,
  hint,
  fullWidth = false,
  children,
}) {
  const classNames = [
    "form-field",
    fullWidth ? "form-field--full" : "",
    error ? "form-field--error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {label && (
        <label
          className="form-field__label"
          htmlFor={htmlFor}
        >
          {label}
        </label>
      )}

      {children}

      {hint && !error && (
        <span className="form-field__hint">
          {hint}
        </span>
      )}

      {error && (
        <span
          className="form-field__error"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;