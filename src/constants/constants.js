const statusCodes = {
  success: 200,
  notFound: 404,
};
const ResponseMessages = {
  success: "Operation Succesfull",
  error: "Couldn't Perform The Opertaion",
  invalid: "Data Not Found",
};
const Statuses = {
  active: "active",
  inactive: "inactive",
};
module.exports = { ResponseMessages, Statuses, statusCodes };
