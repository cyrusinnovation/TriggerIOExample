$(document).ready(function () {
    // Taking and retrieving a picture
    $('#take-picture').tap(function () {
        forge.file.getImage({source: 'camera'},onPhotoURISuccess);
    });
    $('#select-picture').tap(function () {
        var width = parseInt($(window).width());

        forge.file.getImage({source: 'gallery'}, function(file) {
            forge.file.URL(file, function(url) {
              jQT.goTo('#image-page');
              var image = $('#myImage');
              image.attr('style', 'width:' + width + 'px;');
              image.attr('src', url);
          });
        });

    });

    // Image page menu
    $('#share-fb').tap(function () {
        alert('Share to Facebook!');
    });
});
