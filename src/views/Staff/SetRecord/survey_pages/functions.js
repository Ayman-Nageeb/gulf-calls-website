export const createTextQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Enter " + options.text,
    type: "text",
    isRequired: options.isRequired || false,
    unit: options.unit || "",
    value: options.value || "",
  };

  return question;
};

export const createDateQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Enter " + options.text,
    type: "date",
    isRequired: options.isRequired || false,
    unit: options.unit || "",
    value: options.value || "",
  };

  return question;
};

export const createNumericalQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Enter " + options.text,
    type: "numeric",
    isRequired: options.isRequired || false,
    range: options.range || { min: 0, max: 99999999, step: 0.1 },
    unit: options.unit || "",
    value: options.value || "",
  };

  return question;
};

export const createCategoricalQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Select " + options.text,
    isRequired: options.isRequired || false,
    value: options.value || "",
    type: "categorical",
    validValues: options.validValues || [],
  };

  return question;
};

export const createYesNoQuestion = function (options) {
  const validValues = ["Yes", "No"];
  options.validValues = validValues;
  const question = createCategoricalQuestion(options);
  return question;
};

export const createSelectQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Enter " + options.text,
    isRequired: options.isRequired || false,
    value: options.value || "",
    type: "select",
    validValues: options.validValues || [],
    hasCustom: options.hasCustom || false,
    radioView: options.radioView || false,
  };

  return question;
};

export const createMultiSelectQuestion = function (options) {
  const id =
    options.id ||
    function () {
      return options.text.toLowerCase().replace(/\s+/g, "_");
    };
  const question = {
    id: id,
    text: options.text,
    placeholder: options.placeholder || "Enter " + options.text,
    isRequired: options.isRequired || false,
    value: options.value || "",
    type: "multi-select",
    validValues: options.validValues || [],
    hasCustom: options.hasCustom || false,
  };

  return question;
};
