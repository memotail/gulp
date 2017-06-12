define(function() {
  function isString(a) {
    return "string" == typeof a
  }

  function isNumber(b) {
    return a.isNumeric(b)
  }

  function isFunction(b) {
    return a.isFunction(b)
  }

  function isDate(a) {
    return a instanceof Date
  }

  function isArray(b) {
    return a.isArray(b)
  }

  function isEmpty(a) {
    return "" === a || isNull(a)
  }

  function isBlank(a) {
    return isNull(a) || "" === a.trim()
  }

  function isNull(a) {
    return null == a
  }

  function isObjectEmpty(a) {
    if (null == a)
      return !0;
    if (a.length > 0)
      return !1;
    if (0 === a.length)
      return !0;
    for (var b in a)
      if (hasOwnProperty.call(a, b))
        return !1;
    return isNaN(a)
  }

  return {
    isString: isString,
    isNumber: isNumber,
    isFunction: isFunction,
    isDate: isDate,
    isArray: isArray,
    isEmpty: isEmpty,
    isBlank: isBlank,
    isNull: isNull,
    isObjectEmpty: isObjectEmpty
  };
});
