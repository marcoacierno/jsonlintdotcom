function keydown(event, textarea) {
  console.log(event);
  var keyCode = event.keyCode || event.which;

  if (keyCode === 9) {
    event.preventDefault();
    tab(textarea);
  }
}

function tab(textarea) {
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;

  textarea.value = textarea.value.substr(0, start) + "\t" + textarea.value.substr(end);
  textarea.selectionEnd = start + 1;
}