function Input({
  id,
  className = "",
  ...props
}) {
  return (
    <input
      id={id}
      className={`form-control ${className}`}
      {...props}
    />
  );
}

export default Input;