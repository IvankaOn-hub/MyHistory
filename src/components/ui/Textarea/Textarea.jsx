function Textarea({
  id,
  className = "",
  ...props
}) {
  return (
    <textarea
      id={id}
      className={`form-control form-control--textarea ${className}`}
      {...props}
    />
  );
}

export default Textarea;