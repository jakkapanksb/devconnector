const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (validator.isEmpty(data.school)) {
    errors.school = "School Field is required";
  }

  if (validator.isEmpty(data.degree)) {
    errors.degree = "Degree Field is required";
  }

  if (validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study Field is required";
  }

  if (validator.isEmpty(data.from)) {
    errors.from = "From date Field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
