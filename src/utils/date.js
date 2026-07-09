export function formatDate(date) {
  return new Date(date).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getMonth(date) {
  return new Date(date)
    .toLocaleDateString("pl-PL", { month: "long" })
    .replace(/^./, (letter) => letter.toUpperCase());
}

export function getYear(date) {
  return new Date(date).getFullYear();
}

export function getDay(date) {
  return new Date(date).getDate();
}