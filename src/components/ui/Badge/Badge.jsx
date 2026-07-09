import "./Badge.css";

function Badge({ children, variant = "green" }) {
  return (
    <span className={`badge badge--${variant}`}>
      {children}
    </span>
  );
}

export default Badge;