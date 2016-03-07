var imported = document.createElement('script');
imported.src = 'js/weirdStRiNgCaSe.js';
document.head.appendChild(imported);

window.onload = function() {
    var weird = Weird;
    weird.toWeirdCase("This is a test");
};