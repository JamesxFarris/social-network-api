// Formats date as string
function formatDate(date) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Formats date as ISO
function dateFormat(date) {
  return new Date(date).toISOString();
}

module.exports = {
  formatDate,
  dateFormat,
};
