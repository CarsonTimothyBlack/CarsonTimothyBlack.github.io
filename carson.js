function showAlbum(albumName) {
    var albumBoxes = document.querySelectorAll(".album-box");
    for (const box of albumBoxes) {
        box.classList.add("hidden");
    }
    document.getElementById(albumName).classList.remove("hidden");
    location.hash = "albumOpen";
}

document.addEventListener("DOMContentLoaded", function(){
    location.hash = '';
});
