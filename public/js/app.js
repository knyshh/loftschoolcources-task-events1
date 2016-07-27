(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = require("./modules/acordeon");
},{"./modules/acordeon":2}],2:[function(require,module,exports){
(function acordeon(){

    window.addEventListener('load', function () {

        var items = document.querySelectorAll('.accordion-title-js');
        var panels = document.querySelectorAll('.accordion-panel-js');
        var currentTarget;
        var el = document.querySelector('.js-fade');
        var wrap = document.querySelector('.accordion');

        document.addEventListener("click", function (e) {

            var el = e.target;

            if (el.hasAttribute('attr-click-js')) {

                for (var i = 0; i < items.length; i++) {
                    items[i].parentNode.classList.remove('active');
                }

                currentTarget = el.parentNode;
                currentTarget.classList.add('active');

            }
            else {

            }
        });

    });

})();

},{}]},{},[1])