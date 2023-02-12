const API_STATUS_CODES = {
  SUCCESS: 200,
  NOT_FOUND: 404,
  DUPLICATE_ENTRY: 409,
  INTERNAL_SERVER_ERROR: 500,
};
const RESPONSE_MESSAGES = {
  SUCCESS: "Operation Succesfull",
  ERROR: "Couldn't Perform The Operation",
  INVALID: "Data Not Found",
  DUPLICATE: "Duplicate Entry",
  AUTHORIZATION_FAILED: "Authorization Failed",
  ERROR_MESSAGE: "Something Went Wrong"
};
const STATUSES = {
  ACTIVE: "active",
  INACTIVE: "inactive",
};
module.exports = { RESPONSE_MESSAGES, STATUSES, API_STATUS_CODES };

