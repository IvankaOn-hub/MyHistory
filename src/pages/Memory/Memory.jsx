import { Link, useParams } from "react-router-dom";
import Container from "../../components/ui/Container/Container";
import Header from "../../components/features/Header/Header";
import Footer from "../../components/features/Footer/Footer";
import Badge from "../../components/ui/Badge/Badge";
import Card from "../../components/ui/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faTags,
  faHeartRegular,
  faUserGroup,
  faArrowLeft,
  faPen,
  faCalendarDays,
  faLocationDot,

} from "../../assets/icons";

import memories from "../../data/memories";
import { formatDate } from "../../utils/date";

import "./Memory.css";

function MemoryPage() {
  const { id } = useParams();

  const memory = memories.find(
    (memory) => memory.id === Number(id)
  );

  if (!memory) {
    return (
      <main className="app">
        <Container>
          <Header />
          <h1 className="text-center">Nie znaleziono wspomnienia</h1>
        </Container>
      </main>
    );
  }

  return (
  <main className="app">
    <Container>
      <Header />

      <article className="memory-page">
        <section
          className="memory-hero"
          style={{ backgroundImage: `url(${memory.image})` }}
        >
          <Link className="memory-hero__back" to="/memories">
            <FontAwesomeIcon icon={faArrowLeft} /> Powrót do wspomnień
          </Link>

          <Link
            className="btn-link__edit memory-hero__edit"
            to={`/memory/${memory.id}/edit`}
          >
            <FontAwesomeIcon icon={faPen}/> Edytuj
          </Link>

          <div className="memory-hero__content">
            <p className="memory-hero__meta">
              <FontAwesomeIcon icon={faCalendarDays} />{formatDate(memory.date)} | <FontAwesomeIcon icon={faLocationDot} />{memory.location}
            </p>

            <h1 className="memory-hero__title">
              {memory.title}
            </h1>

            <Badge>
              {memory.category}
            </Badge>
          </div>
        </section>

        <div className="memory-page__intro">
          <p>{memory.description}</p>
        </div>

        <section className="memory-info">

          <Card className="memory-info__card">
            <h3><FontAwesomeIcon icon={faSun} className="memory-info__icon" /> Pogoda</h3>

            <div className="memory-info__content">
              <strong>{memory.weather.temperature}°C</strong>
              <span>{memory.weather.condition}</span>
            </div>
          </Card>

          <Card className="memory-info__card">
            <h3><FontAwesomeIcon icon={faUserGroup} className="memory-info__icon" /> Osoby</h3>

            <div className="memory-info__chips">
              {memory.people.map((person) => (
                <span
                  key={person}
                  className="chip"
                >
                  {person}
                </span>
              ))}
            </div>
          </Card>

          <Card className="memory-info__card">
            <h3><FontAwesomeIcon icon={faHeartRegular} className="memory-info__icon" /> Emocje</h3>

            <div className="memory-info__chips">
              {memory.emotions.map((emotion) => (
                <span
                  key={emotion}
                  className="chip chip--emotion"
                >
                  {emotion}
                </span>
              ))}
            </div>
          </Card>

          <Card className="memory-info__card">
            <h3><FontAwesomeIcon icon={faTags} className="memory-info__icon" /> Tagi</h3>

            <div className="memory-info__chips">
              {memory.tags.map((tag) => (
                <span
                  key={tag}
                  className="chip chip--tag"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Card>

        </section>

        <section className="memory-gallery">
          <div className="memory-gallery__header">
            <h2>Galeria</h2>

            <div className="memory-gallery__filters">
              <button className="memory-gallery__filter memory-gallery__filter--active">
                Wszystkie
              </button>

              <button className="memory-gallery__filter">
                Tylko zdjęcia
              </button>
            </div>
          </div>

          <div className="grid grid--3">
            {memory.media.map((item) => (
              <article
                className="memory-gallery__item"
                key={item.id}
              >
                {item.type === "image" && (
                  <img src={item.src} alt={memory.title} />
                )}

                {item.type === "video" && (
                  <>
                    <img src={item.thumbnail} alt={item.title} />

                    <span className="memory-gallery__play">
                      ▶
                    </span>

                    <span className="memory-gallery__duration">
                      {item.duration}
                    </span>
                  </>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="memory-actions">
        <div className="memory-notes">
          <div className="memory-notes__header">
            <h2>Notatki</h2>

            <button
              className="memory-notes__favorite"
              type="button"
              aria-label="Dodaj do ulubionych"
            >
            ♡
            </button>
          </div>

          <p>
            To były wyjątkowe urodziny. Zosia była bardzo szczęśliwa z prezentów,
            a tort z jednorożcem był przepyszny.
          </p>
        </div>

        <div className="memory-actions__buttons">
          <button className="memory-actions__button" type="button">
            ♡ Dodaj do ulubionych
          </button>

          <button className="memory-actions__button" type="button">
            ↓ Pobierz album
          </button>

          <button className="memory-actions__button memory-actions__button--danger" type="button">
            🗑 Usuń wspomnienie
          </button>
        </div>
      </section>

      </article>
    
      <Footer />
    </Container>
  </main>
);
}

export default MemoryPage;