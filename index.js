var adultVerified = false;
var maxGalleryImage = 5;
var imageIndex = 1;

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
    resetGalleryImage();
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
    resetGalleryImage();
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
    var galleryImage = document.querySelector("gallery-component").shadowRoot.getElementById("gallery-image-0");
    if(galleryImage !== null) galleryImage.style.display = 'block';
    // resetGalleryImage();
}

function onClickAdult() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
    resetGalleryImage();
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

function onClickGalleryImage() {
    if(imageIndex >= maxGalleryImage) {
        return;
    }
    var currentImage = document.querySelector("gallery-component").shadowRoot.getElementById("gallery-image-" + imageIndex);
    // var currentImage = document.getElementById("gallery-image-" + index);
    currentImage.style.display = 'block';
    imageIndex++;
}

function resetGalleryImage() {
    for(let i = 0; i < maxGalleryImage; i++) {
        var galleryImage = document.querySelector("gallery-component").shadowRoot.getElementById("gallery-image-" + i);
        // var galleryImage = document.getElementById("gallery-image-" + i);
        if(galleryImage !== null) galleryImage.style.display = 'none';
    }
    imageIndex = 1;
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}