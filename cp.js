function copyCode(codeid) {
    var copyText = document.getElementById(codeid);
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.textContent);

    // Alert the copied text
    // alert("Copied the text: " + copyText.textContent);
  }