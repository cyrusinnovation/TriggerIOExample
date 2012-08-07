$(document).ready(function () {
    // Page 3 - picture sharing

    $('#take_picture').click(function () {
        forge.camera.getPicture(onPhotoURISuccess, onCancelOrFail,
            {
                quality:50,
                destinationType: Camera.DestinationType.FILE_URI
            }
        );
    });

    $('#select_picture').click(function () {
        forge.camera.getPicture(onPhotoURISuccess, onCancelOrFail,
            {
                quality:50,
                destinationType: Camera.DestinationType.FILE_URI,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY
            }
        );
    });

// Touchstart Demo
//    document.getElementsByTagName('a')[0].addEventListener('touchstart',function(e) {
//        $(e.currentTarget).addClass("red");
//    });

    $("a").on('touchstart', function() {
        $(this).mousedown();
    });


    $('#show-footer-menu').click(function () {
        $('#footer-menu').slideDown();
        $('#hide-footer-menu').show();
        $(this).hide();
    });

    $('#hide-footer-menu').click(function () {
        $('#footer-menu').slideUp();
        $('#show-footer-menu').show();
        $(this).hide();
    });

    function onPhotoURISuccess(imageURI) {
        $.mobile.changePage($('#page4'), {transition:'slide'});
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onCancelOrFail(message) {
        if(message === "no image selected") return;

        alert('Failed because: ' + message);
    }
});