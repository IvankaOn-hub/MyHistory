import { useState } from "react";
import { Link } from "react-router-dom";
import MemoryCard from "../MemoryCard/MemoryCard";
import memories from "../../../data/memories";
import { getMonth, getYear } from "../../../utils/date";

import "./Timeline.css";

const latestMemories = memories
  .slice()
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);


function Timeline() {

const [activeId, setActiveId] = useState(null);

  return (
    <section className="timeline">
      <h2 className="timeline__year">{getYear(latestMemories[0].date)}</h2>

      <div className="timeline__list">
        {latestMemories.map(memory => (
            <div
                key={memory.id}
                className="timeline__item"
            >
                <span
                    className={`
                        timeline__month
                        ${activeId === memory.id ? "timeline__month--active" : ""}
                    `}
                >
                    {getMonth(memory.date)}
                </span>

                <MemoryCard
                    {...memory}
                    onMouseEnter={() => setActiveId(memory.id)}
                    onMouseLeave={() => setActiveId(null)}
                />
            </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Link className="btn-link btn-link__outline" to="/memories">
          Pokaż wszystkie wspomnienia
        </Link>
      </div>
    </section>
  );
}

export default Timeline;