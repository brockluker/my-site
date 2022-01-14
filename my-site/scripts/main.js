let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-face.jpg') {
        myImage.setAttribute('src','images/Daemon.jpg');
    } else {
        myImage.setAttribute('src','images/my-face.jpg');
    }    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('hi');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }  

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Brock is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

