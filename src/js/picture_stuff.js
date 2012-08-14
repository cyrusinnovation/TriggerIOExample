$(document).ready(function () {
    // Taking and retrieving a picture
    $('#take-picture').tap(function () {
        getImageAndDisplay('camera');
    });
    $('#select-picture').tap(function () {
        getImageAndDisplay('gallery');
    });

    // Image page menu
    $('#share-fb').tap(function () {
        var title = "Mobile Upload"
        var message = "My most recent picture brought to you by Cyrus Innovation!";
        var photo_url = $('#myImage').attr('src');
        postToFeed(title, message, photo_url);
    });

});

function getImageAndDisplay(sourceType){
    var width = parseInt($(window).width());

    forge.file.getImage({source: sourceType}, function(file) {
        forge.file.URL(file, function(url) {
            jQT.goTo('#image-page');
            var image = $('#myImage');
            image.attr('style', 'width:' + width + 'px;');
            image.attr('src', url);
        });
    });
}

function postToFeed(title,msg,pht) {
    // The Trigger.io file URL does not work when trying to upload a post to the fb feed
    forge.facebook.ui(
        {
            method: 'feed',
            //picture: pht,
            picture: 'http://4.bp.blogspot.com/-8GmdKINnsgY/Tf8aLdRxJlI/AAAAAAAAAKY/9VCpycmEQr0/s1600/Sunset.jpg',
            name: title,
            caption: '',
            description: msg
        }, function(response){
            alert('Posted!');
        }
    );
}
