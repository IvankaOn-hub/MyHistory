import { useState } from "react";

import "./MultiValueInput.css";
import Button from "../Button/Button";

function MultiValueInput({
  id,
  label,
  values = [],
  onChange,
  placeholder,
  addLabel = "Dodaj",
  normalizeValue,
}) {
  const [inputValue, setInputValue] = useState("");

  const safeValues = Array.isArray(values)
    ? values
    : [];

  function handleAddValue() {
    const trimmedValue = inputValue.trim();

    if (!trimmedValue) {
      return;
    }

    const newValue = normalizeValue
      ? normalizeValue(trimmedValue)
      : trimmedValue;

    const alreadyExists = safeValues.some(
      (value) =>
        value.toLowerCase() === newValue.toLowerCase()
    );

    if (alreadyExists) {
      setInputValue("");
      return;
    }

    onChange([...safeValues, newValue]);
    setInputValue("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      handleAddValue();
    }
  }

  function handleRemoveValue(valueToRemove) {
    onChange(
      safeValues.filter(
        (value) => value !== valueToRemove
      )
    );
  }

  return (
    <div className="multi-value">
      {label && (
        <label
          className="multi-value__label"
          htmlFor={id}
        >
          {label}
        </label>
      )}

      <div className="multi-value__control">
        <input
          id={id}
          className="multi-value__input"
          type="text"
          value={inputValue}
          onChange={(event) =>
            setInputValue(event.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />

        <Button
         type="button"
         variant="primary"
         onClick={handleAddValue}
         disabled={!inputValue.trim()}
       >
         {addLabel}
       </Button>

      </div>

      {safeValues.length > 0 && (
        <div className="multi-value__chips">
          {safeValues.map((value) => (
            <span
              className="multi-value__chip"
              key={value}
            >
              <span>{value}</span>

              <button
                type="button"
                onClick={() =>
                  handleRemoveValue(value)
                }
                aria-label={`Usuń ${value}`}
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiValueInput;