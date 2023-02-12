function dateCheck(start_date, end_date) {
  if (!start_date) {
    start_date = end_date;
    return start_date;
  } else {
    return start_date;
  }
}

module.exports = dateCheck;
