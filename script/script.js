var deButton = document.querySelector(".menu");
var deNavigatie = document.querySelector("nav");

deButton.onclick = toggleMenu;

function toggleMenu() {
    var deItems = document.querySelectorAll("nav ul li");
    deNavigatie.classList.toggle("toonmenu");

    if (deNavigatie.classList.contains("toonmenu")) {
        deItems.forEach(function(item) {
            item.classList.add("liAppear");
        });
    } else {
        deItems.forEach(function(item) {
            item.classList.remove("liAppear");
        });
    }
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
    if (event.key == "Escape") {
        var deItems = document.querySelectorAll("nav ul li");
        deNavigatie.classList.remove("toonmenu");
        deItems.forEach(function(item) {
            item.classList.remove("liAppear");
        });
    }
}

const loader = document.querySelector('.loading-animation');

window.addEventListener('load', () => {
    loader.classList.add('revealed');
});

loader.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'mask-size') {
        loader.classList.add('hidden');
    }
    if (e.propertyName === 'transform') {
        document.body.classList.add('loaded');
    }
});


// on click 
const itemHeader = document.querySelector('.item-header');
const headerImage = document.querySelector('.header-image');

itemHeader.addEventListener('click', (e) => {
    e.stopPropagation();
    itemHeader.classList.toggle('is-active');
    document.body.classList.toggle('dimmed');
});

document.addEventListener('click', () => {
    itemHeader.classList.remove('is-active');
    document.body.classList.remove('dimmed');
});