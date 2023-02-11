function DateFormat() {
  const dateobj = new Date();
  let day = dateobj.getDate();
  let month = dateobj.getMonth() + 1;
  let year = dateobj.getFullYear();
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  const date = `${year}-${month}-${day}`;
  return date;
}
module.exports = DateFormat;
