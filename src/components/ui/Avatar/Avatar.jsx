import "./Avatar.css";

function Avatar({
  src,
  alt = "Avatar",
  size = "md",
}) {
  return (
    <button className={`avatar avatar--${size}`}>
      <img
        className="avatar__image"
        src={src}
        alt={alt}
      />
    </button>
  );
}

export default Avatar;