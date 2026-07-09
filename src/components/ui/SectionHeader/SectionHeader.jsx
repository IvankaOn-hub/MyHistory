import "./SectionHeader.css";

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <section className="section-header">

      {eyebrow && (
        <p className="section-header__eyebrow">
          {eyebrow}
        </p>
      )}


        <h1>
          {title}
        </h1>

        {action && (
          <div>
            {action}
          </div>
        )}


      {description && (
        <p>
          {description}
        </p>
      )}

    </section>
  );
}

export default SectionHeader;