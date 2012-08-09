$(document).ready(function(){

    $('#select-contact').tap(function () {
        forge.contact.select(onContactSuccess, onContactError);
    });

});

var onContactSuccess = function (contact) {
    alert('You chose ' + contact.displayName + '!');
    sendMessage([contact.phoneNumbers[0].value]);
};

var onContactError = function (content) {
    if (content.message==='Contact selection cancelled'){
        return;
    }
    alert( 'No contact chosen: ' + content.message + '\n');
};

var onSendError = function (content) {
    if (content.message==='Contact selection cancelled'){
        return;
    }
    alert( 'Message did not send: ' + content.message + '\n');
};

function sendMessage(phoneNumbers){
    forge.sms.send({
        body: "Hello, from my iPhone App! :)",
        to: phoneNumbers
    }, function () {
        alert("Message sent.");
    }, onSendError);
}


