<<<<<<< Updated upstream
function cssProp() {
  'use strict';

  //code goes here
}
=======
cssProp = (function () {
  'use strict';

  function _getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    return nodesArray[0];
  }

  function _setSingleProperty(element, property, value) {
    element.style[property] = value;
    return element.style[property];
  }

  function _setMultipleProperties(element, objProperties) {
    var value;
    var set;

    for (var key in objProperties) {
      value = objProperties[key];
      set = _setSingleProperty(element, key, value);
    }
    return set;
  }

  function _getPropertyValue(element, property) {
    return element.style[property];
  }

  function setProp(elementSelector, property, value) {
    var element = _getElement(elementSelector);

    if (typeof property === 'object') {
      return _setMultipleProperties(element, property);
    } else if ((typeof property === 'string') && (typeof value == 'undefined')) {
      return _getPropertyValue(element, property);
    } else {
      return _setSingleProperty(element, property, value);
    }
  }

  return {
    prop: setProp
  };

})();
>>>>>>> Stashed changes
