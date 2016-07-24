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