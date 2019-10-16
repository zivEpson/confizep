import _ from "lodash";

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

/**
 * Set the modal popup parameters
 *
 * @param {*} res
 */
export const setModalData = (res, header, body, hasCancel) => {
  let textColor = "text-success";
  let borderColor = "border border-success";
  if (res !== null && res.status !== 200) {
    textColor = "text-danger";
    borderColor = "border border-danger";
  }
  const modalObject = {
    show: true,
    header: header,
    body: body,
    textColor: textColor,
    borderColor: borderColor,
    hasCancel: hasCancel
  };
  return modalObject;
};

/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export const difference = (object, base) => {
  function changes(object, base) {
    return _.transform(object, function(result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key])
            ? changes(value, base[key])
            : value;
      }
    });
  }
  return changes(object, base);
};

export const buildURL = (moduleName, recordId, mode) => {
  return `/admin-dashboard/${moduleName}s/${recordId}?mode=${mode}`;
};
