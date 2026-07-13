
function onClickHome() {
    var index = document.getElementById("index");
    index.style.display = 'block';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
}

function onClickCharacter() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'block';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'none';
}

function onClickGallery() {
    var index = document.getElementById("index");
    index.style.display = 'none';
    var character = document.getElementById("character");
    character.style.display = 'none';
    var gallery = document.getElementById("gallery");
    gallery.style.display = 'block';
}