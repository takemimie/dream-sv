var adultVerified = false;

function onClickHome() {
    var index = document.getElementById("index");
    index.style.display = 'block';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
    var adult = document.getElementById("adult");
    adult.style.display = 'none';
    var hiddenAdult = document.getElementById("hidden-adult");
    hiddenAdult.style.display = 'none';
}

function onClickCharacter() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'block';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
    var adult = document.getElementById("adult");
    adult.style.display = 'none';
    var hiddenAdult = document.getElementById("hidden-adult");
    hiddenAdult.style.display = 'none';
}

function onClickGallery() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'block';
    var adult = document.getElementById("adult");
    adult.style.display = 'none';
    var hiddenAdult = document.getElementById("hidden-adult");
    hiddenAdult.style.display = 'none';
}

function onClickAdult() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
    if (adultVerified) {
        var adult = document.getElementById("adult");
        adult.style.display = 'none';
        var hiddenAdult = document.getElementById("hidden-adult");
        hiddenAdult.style.display = 'block';
    } else {
        var adult = document.getElementById("adult");
        adult.style.display = 'block';
        var hiddenAdult = document.getElementById("hidden-adult");
        hiddenAdult.style.display = 'none';
    }
}

function submitPassword() {
    var passwordInput = document.querySelector("adult-component").shadowRoot.getElementById("password");
    var password = passwordInput.value;

    // console.log('After encoded: ' + btoa("whereIsP4R"));

    if (password === atob('d2hlcmVJc1A0Ug==')) {
        adultVerified = true;
        var adult = document.getElementById("adult");
        adult.style.display = 'none';
        var hiddenAdult = document.getElementById("hidden-adult");
        hiddenAdult.style.display = 'block';
        // var hiddenAdult = document.querySelector("adult-component").shadowRoot.getElementById("hidden-adult");

    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}