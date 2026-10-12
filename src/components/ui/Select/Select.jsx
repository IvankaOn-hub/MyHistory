function Select({
  id,
  className = "",
  children,
  ...props
}) {
  return (
    <select
      id={id}
      className={`form-control ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export default Select;