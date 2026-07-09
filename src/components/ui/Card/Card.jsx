import "./Card.css";

function Card({
    title,
    action,
    children,
    className = "",
}) {
    return (
        <article className={`card ${className}`}>

            {(title || action) && (

                <div className="card__header">

                    {title && (
                        <h3>
                            {title}
                        </h3>
                    )}

                    {action && (
                        <div className="card__action">
                            {action}
                        </div>
                    )}

                </div>

            )}

            <div className="card__body">
                {children}
            </div>

        </article>
    );
}

export default Card;