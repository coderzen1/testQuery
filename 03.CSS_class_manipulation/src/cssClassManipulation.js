var cssClass = (function() {
  'use strict';

  function _getElement(elementSelector) {
    var nodesArray = Array.prototype.slice.call(document.querySelectorAll(elementSelector));
    var element = nodesArray[0];
    return element;
  }

  function add(elementSelector, setClass) {
    var element = _getElement(elementSelector);
    element.className = setClass;
    return element.className;
  }

  function remove(elementSelector, deleteClass) {
    var element = _getElement(elementSelector);
    element.classList.remove(deleteClass);
  }

  function toggle(elementSelector, toggleClass) {
    var element = _getElement(elementSelector);
    element.classList.toggle(toggleClass);
  }

  function has(elementSelector, hasClass) {
    var element = _getElement(elementSelector);
    return element.classList.contains(hasClass);
  }

  return {
    add: add,
    remove: remove,
    toggle: toggle,
    has: has
  };

})();