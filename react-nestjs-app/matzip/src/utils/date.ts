function getDateDetails(dateString: string | Date) {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

function getDateWithSeparator(
  dateString: string | Date,
  separator: string = '',
) {
  const {year, month, day} = getDateDetails(dateString);
  return [
    year,
    String(month).padStart(2, '0'),
    String(day).padStart(2, '0'),
  ].join(separator);
}

export {getDateDetails, getDateWithSeparator};
