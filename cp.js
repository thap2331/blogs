const copyButtonLabel = "Copy Code";

async function copyCodetest(button, codeid) {
    var copyText = document.getElementById(codeid);
  
     // Copy the text inside the text field
    await navigator.clipboard.writeText(copyText.textContent);
  
    // visual feedback that task is completed
    button.innerText = "Code Copied";

    setTimeout(() => {
      button.innerText = copyButtonLabel;
    }, 700);
  }

// https://www.roboleary.net/2022/01/13/copy-code-to-clipboard-blog.html#javascript