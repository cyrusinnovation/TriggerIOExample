$(document).ready(function () {
    // Taking and retrieving a picture
    $('#take-picture').tap(function () {
        forge.file.getImage({source: 'camera'},onPhotoURISuccess);
    });
    $('#select-picture').tap(function () {
        var width = parseInt($(window).width());
        var height = parseInt($(window).height());

        forge.file.getImage({source: 'gallery'}, function(file) {
            forge.file.URL(file, function(url) {
              jQT.goTo('#image-page');
              var image = $('#myImage');
              image.attr('style', 'width:' + width + 'px;');
              image.attr('src', url);
          });
        });


        //forge.file.getImage({width: width, height: height, source: 'gallery'}, onPhotoURISuccess);
    });

    // Image page menu
    $('#share-fb').tap(function () {
        alert('Share to Facebook!');
    });
});

function onPhotoURISuccess(filename) {
    forge.file.URL(filename, successful_image);
}

function successful_image(url){
    jQT.goTo('#image-page');
    var image = document.getElementById('myImage');
    image.src = url;
}