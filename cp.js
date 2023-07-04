async function copyCodetest(button, codeid) {
    var copyText = document.getElementById(codeid);
  
     // Copy the text inside the text field
    await navigator.clipboard.writeText(copyText.textContent);
  
    // visual feedback that task is completed
    button.innerText = 'Code Copied';

    setTimeout(() => {
      button.innerText = 'Copy Code';
    }, 700);
  };

// https://www.roboleary.net/2022/01/13/copy-code-to-clipboard-blog.html#javascript

function expandTips(section){
  var tipsList = section.nextElementSibling;

  tipsList.style.display = tipsList.style.display == 'block' ? 'none' : 'block';
  section.getElementsByTagName('p')[0].innerText = tipsList.style.display == 'block' ? '-' : '+';
};


window.onscroll = function() {myFunction()};

function myFunction() {
  var navbar = document.getElementById('navbar');
  var sticky = navbar.offsetTop;

  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
};

function darkMode(button) {
  var element = document.body;
  element.classList.toggle('dark-mode');
  button.innerText = button.innerText === 'Light' ? 'Dark' : 'Light';
};