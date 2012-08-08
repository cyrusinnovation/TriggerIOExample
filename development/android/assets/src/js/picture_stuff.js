$(document).ready(function () {

    // Retrieving or taking a picture

    $('#take-picture').tap(function () {
        forge.file.getImage({source: 'camera'},onPhotoURISuccess);
    });

    $('#select-picture').tap(function () {
        forge.file.getImage({source: 'gallery'},onPhotoURISuccess);
    });


    function onPhotoURISuccess(filename) {
        forge.file.URL(filename, successful_image);
    }

    function successful_image(URL){
        jQT.goTo('#image-page');
        var image = document.getElementById('myImage');
        image.src = URL;
    }

    // Image page menu

    $('#share-email').tap(function () {
        alert('Share over email!');
    });

    $('#share-text').tap(function () {
        alert('Share over text!');
    });
});