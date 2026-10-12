import { Link, useParams } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
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
  faArrowUpFromBracket,
  faTrashCan,

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
          <Link className="memory-hero__back button button__icon" to="/memories">
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
               <Button
                  
                  variant="outline"
                  active="true"
                >
                Wszystkie
                </Button>
               <Button
                  variant="outline"
                >
                Tylko zdjęcia
                </Button>
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
        <Card>
          <h2>Notatki</h2>
          <p>{memory.notes}</p>
        </Card>

        <div className="memory-actions__buttons">
          <Button
            icon={<FontAwesomeIcon icon={faHeartRegular} />}
            variant="primary"
          >
           Dodaj do ulubionych
          </Button>

          
          <Button
            icon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
            variant="primary"
          >
           Pobierz album
        </Button>

          <Button
            icon={<FontAwesomeIcon icon={faTrashCan} />}
            variant="danger"
          >
           Usuń wspomnienie
        </Button>

           
        </div>
      </section>

      </article>
    
    </Container>
      <Footer />

  </main>
);
}

export default MemoryPage;