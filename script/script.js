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

if (loader) {
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
}

// on click 
const itemHeader = document.querySelector('.item-header');

if (itemHeader) {
    itemHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        itemHeader.classList.toggle('is-active');
        document.body.classList.toggle('dimmed');
    });

    document.addEventListener('click', () => {
        itemHeader.classList.remove('is-active');
        document.body.classList.remove('dimmed');
    });
}

// tabs
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        const activate = (btn) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            tabContents.forEach(c => c.style.display = 'none');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.style.display = 'flex';
        };

        tabBtns.forEach(btn => btn.addEventListener('click', () => activate(btn)));
        activate(tabBtns[0]);
    }
}

// automatisch naar boven scrollen bij laden van index.html

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }
});