var socket = io();

socket.on('connect', function(){
  console.log('connected to socket.io server');
});

socket.on('message', function(message){
  var momentTimestamp = moment.utc(message.timestamp);
  console.log('New message: ' + message.text);

  jQuery('.messages').append('<p><span>' + momentTimestamp.local().format('h:mma') + '</span>' + ' ' + message.text + '</p>')
});

// Handles submitting new message
var $form = jQuery('#message-form');

$form.on('submit', function(event){
  event.preventDefault();

  var $message = $form.find('input[name=message]')

  socket.emit('message', {
    text: $message.val()
  });

  $message.val('');

});
