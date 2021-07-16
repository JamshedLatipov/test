var main = (function () {
  var _welcomeBlock = document.querySelector(".welcome");
  var _homeBlock = document.querySelector(".home");
  var _DESTROY_CLASS = "hide";

  var _start = function () {
    _welcomeBlock.classList.add(_DESTROY_CLASS);
    _homeBlock.classList.remove(_DESTROY_CLASS);
  };

  var _back = function () {
    _welcomeBlock.classList.remove(_DESTROY_CLASS);
    _homeBlock.classList.add(_DESTROY_CLASS);
  };

  return {
    start: _start,
    back: _back,
  };
})();

window.onload = function () {
  card.setListeners();
};
