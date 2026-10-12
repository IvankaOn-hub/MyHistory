import { useState } from "react";

import Button from "../../ui/Button/Button";
import Card from "../../ui/Card/Card";
import FormField from "../../ui/FormField/FormField";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import Textarea from "../../ui/Textarea/Textarea";
import MultiValueInput from "../../ui/MultiValueInput/MultiValueInput";

import "./MemoryForm.css";

const emptyMemory = {
  title: "",
  date: "",
  location: "",
  category: "",
  description: "",
  notes: "",
  tags: [],
  people: [],
  emotions: [],
  isFavorite: false,
  image: "",
  media: [],
};

function MemoryForm({
  initialData = emptyMemory,
  submitLabel = "Zapisz wspomnienie",
  onSubmit,
  onCancel,
}) {
  const [formData, setFormData] = useState({
    ...emptyMemory,
    ...initialData,

    tags: Array.isArray(initialData.tags)
      ? initialData.tags
      : [],

    people: Array.isArray(initialData.people)
      ? initialData.people
      : [],

    emotions: Array.isArray(initialData.emotions)
      ? initialData.emotions
      : [],
  });

  const [coverPreview, setCoverPreview] = useState(
    initialData.image || ""
  );

  const [mediaPreviews, setMediaPreviews] = useState(
    Array.isArray(initialData.media)
      ? initialData.media
      : []
  );

  function handleChange(event) {
    const {
      name,
      value,
      type,
      checked,
    } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  }

  function handleArrayChange(name, values) {
    setFormData((previousData) => ({
      ...previousData,
      [name]: values,
    }));
  }

  function handleCoverChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const previewUrl =
      URL.createObjectURL(file);

    setCoverPreview(previewUrl);
  }

  function handleMediaChange(event) {
    const files = Array.from(
      event.target.files || []
    );

    const newMedia = files.map((file) => ({
      id: crypto.randomUUID(),

      type: file.type.startsWith("video")
        ? "video"
        : "image",

      src: URL.createObjectURL(file),
      file,
    }));

    setMediaPreviews((previousMedia) => [
      ...previousMedia,
      ...newMedia,
    ]);
  }

  function handleRemoveMedia(id) {
    setMediaPreviews((previousMedia) =>
      previousMedia.filter(
        (item) => item.id !== id
      )
    );
  }

  function createSlug(value) {
    return value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const memoryData = {
      ...initialData,
      ...formData,

      slug:
        initialData.slug ||
        createSlug(formData.title),

      categorySlug:
        createSlug(formData.category),

      image: coverPreview,
      media: mediaPreviews,
    };

    onSubmit(memoryData);
  }

  return (
    <form
      className="memory-form"
      onSubmit={handleSubmit}
    >
      <Card
        className="memory-form__card"
        title="Podstawowe informacje"
      >
        <div className="memory-form__grid">
          <FormField
            label="Tytuł"
            htmlFor="memory-title"
            fullWidth
          >
            <Input
              id="memory-title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Np. Pierwsza wycieczka w Tatry"
              required
            />
          </FormField>

          <FormField
            label="Data"
            htmlFor="memory-date"
          >
            <Input
              id="memory-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormField>

          <FormField
            label="Lokalizacja"
            htmlFor="memory-location"
          >
            <Input
              id="memory-location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Zakopane, Polska"
              required
            />
          </FormField>

          <FormField
            label="Kategoria"
            htmlFor="memory-category"
          >
            <Select
              id="memory-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Wybierz kategorię
              </option>

              <option value="Podróże">
                Podróże
              </option>

              <option value="Rodzina">
                Rodzina
              </option>

              <option value="Święta">
                Święta
              </option>

              <option value="Urodziny">
                Urodziny
              </option>

              <option value="Codzienność">
                Codzienność
              </option>

              <option value="Inne">
                Inne
              </option>
            </Select>
          </FormField>

          <label className="memory-form__checkbox">
            <Input
              type="checkbox"
              name="isFavorite"
              checked={formData.isFavorite}
              onChange={handleChange}
            />

            <span>
              Dodaj do ulubionych
            </span>
          </label>
        </div>
      </Card>

      <Card
        className="memory-form__card"
        title="Zdjęcie główne"
      >
        <label className="memory-form__upload">
          <input
            className="memory-form__file-input"
            type="file"
            accept="image/*"
            onChange={handleCoverChange}
          />

          {coverPreview ? (
            <img
              src={coverPreview}
              alt="Podgląd zdjęcia głównego"
            />
          ) : (
            <div className="memory-form__upload-placeholder">
              <strong>
                Dodaj zdjęcie główne
              </strong>

              <span>
                Kliknij albo przeciągnij plik
              </span>
            </div>
          )}
        </label>
      </Card>

      <Card
        className="memory-form__card"
        title="Opis i notatki"
      >
        <div className="memory-form__fields">
          <FormField
            label="Krótki opis"
            htmlFor="memory-description"
          >
            <Textarea
              id="memory-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Opisz najważniejsze chwile..."
              required
            />
          </FormField>

          <FormField
            label="Notatki"
            htmlFor="memory-notes"
            hint="Tutaj możesz zapisać więcej szczegółów."
          >
            <Textarea
              id="memory-notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={6}
              placeholder="Dodaj więcej szczegółów..."
            />
          </FormField>
        </div>
      </Card>

      <Card
        className="memory-form__card"
        title="Media"
      >
        <label className="button button--primary">
          <input
            className="memory-form__file-input"
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleMediaChange}
          />

          Dodaj zdjęcia lub filmy
        </label>

        {mediaPreviews.length > 0 && (
          <div className="memory-form__media-grid">
            {mediaPreviews.map((item) => (
              <article
                className="memory-form__media-item"
                key={item.id}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                  />
                ) : (
                  <video
                    src={item.src}
                    muted
                  />
                )}

                <Button
                  type="button"
                  className="memory-form__remove-media"
                  onClick={() =>
                    handleRemoveMedia(item.id)
                  }
                  aria-label="Usuń media"
                >
                  ×
                </Button>
              </article>
            ))}
          </div>
        )}
      </Card>

      <Card
        className="memory-form__card"
        title="Dodatkowe informacje"
      >
        <div className="grid">
          <MultiValueInput
            id="memory-people"
            label="Osoby"
            values={formData.people}
            onChange={(values) =>
              handleArrayChange(
                "people",
                values
              )
            }
            placeholder="Wpisz imię osoby"
            addLabel="Dodaj osobę"
          />

          <MultiValueInput
            id="memory-emotions"
            label="Emocje"
            values={formData.emotions}
            onChange={(values) =>
              handleArrayChange(
                "emotions",
                values
              )
            }
            placeholder="Np. Szczęście"
            addLabel="Dodaj emocję"
          />

          <div className="memory-form__field--full">
            <MultiValueInput
              id="memory-tags"
              label="Tagi"
              values={formData.tags}
              onChange={(values) =>
                handleArrayChange(
                  "tags",
                  values
                )
              }
              placeholder="Np. wakacje"
              addLabel="Dodaj tag"
              normalizeValue={(value) =>
                value
                  .replace(/^#/, "")
                  .toLowerCase()
              }
            />
          </div>
        </div>
      </Card>

      <div className="memory-form__actions">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Anuluj
        </Button>

        <Button
          type="submit"
          variant="primary"
        >
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default MemoryForm;