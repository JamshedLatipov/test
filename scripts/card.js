var card = (function () {
  var _cards = document.querySelectorAll(".card");
  var _header = document.querySelector(".home__header--title");
  var _back = document.querySelector(".home__header--back");
  var _position = {};
  var _size = {};

  var toggle = function (event) {
    var target = event.currentTarget;
    var isOpened = target.classList.contains("card__modal--full-screen");
    _header.innerHTML = target.querySelector(".card__title").innerHTML;

    if (isOpened) {
      _closeModal(event);
      _header.classList.remove("show");
      _back.classList.remove("hide");
    } else {
      _openModal(event);
      _header.classList.add("show");
      _back.classList.add("hide");
    }
  };

  var _openModal = function (event) {
    var target = event.currentTarget;
    _position = target.getBoundingClientRect();
    _size = {
      width: window.getComputedStyle(target).width,
      height: window.getComputedStyle(target).height,
    };

    target.style.position = "absolute";
    target.style.top = _position.top + "px";
    target.style.left = _position.left + "px";
    target.style.height = _size.height;
    target.style.width = _size.width;
    target.style.margin = target.style.margin;
    target.classList.add("card__modal--full-screen");

    setTimeout(function () {
      target.style.height = "86vh";
      target.style.width = "98vw";
      target.style.top = "10vh";
      target.style.left = "0";
      target.style.margin = "1vw";
    }, 0);
  };

  var _closeModal = function (event) {
    var target = event.currentTarget;

    target.style.height = _size.height;
    target.style.width = _size.width;
    target.style.top = _position.top + "px";
    target.style.left = _position.left + "px";
    target.style.margin = "0";
    target.classList.remove("card__modal--full-screen");

    setTimeout(function () {
      target.style.position = "static";
    }, 310);
  };

  var _setListeners = function () {
    for (var i = 0; i < _cards.length; i++) {
      _cards[i].addEventListener("click", toggle);
    }
  };

  return {
    setListeners: _setListeners,
  };
})();
