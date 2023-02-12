const API_STATUS_CODES = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  ERROR_CODE: 400,
  INTERNAL_SERVER_ERROR: 500,
};
const RESPONSE_MESSAGES = {
  SUCCESS: "Operation Succesfull",
  ERROR: "Couldn't Perform The Opertaion",
  INVALID: "Invalid Input",
};
const STATUSES = {
  ACTIVE: "active",
  INA: "inactive",
};
module.exports = { RESPONSE_MESSAGES, API_STATUS_CODES };
