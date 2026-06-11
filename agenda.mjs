
function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function addDays(startDate, days) {
  const date = new Date(startDate);
  date.setUTCDate(date.getUTCDate() + days);
  return formatDate(date);
}

function addMonths(startDate, months) {
  const date = new Date(startDate);
  date.setUTCMonth(date.getUTCMonth() + months);
  return formatDate(date);
}

function addYears(startDate, years) {
  const date = new Date(startDate);
  date.setUTCFullYear(date.getUTCFullYear() + years);
  return formatDate(date);
}


export function createAgendaItem(topic, startDate) {
  return [
    {
      topic: topic,
      date: addDays(startDate, 7),
    },
    {
      topic: topic,
      date: addMonths(startDate, 1),
    },
    {
      topic: topic,
      date: addMonths(startDate, 3),
    },
    {
      topic: topic,
      date: addMonths(startDate, 6),
    },
    {
      topic: topic,
      date: addYears(startDate, 1),
    },
  ];
}
