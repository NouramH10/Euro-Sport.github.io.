const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "img/images.jpeg") {
    myImage.setAttribute("src", "img/download.jpeg");
  } else {
    myImage.setAttribute("src", "img/images.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Euros is the place to be, ${myName}`;
  }

  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Euros is the place to be, ${myName}`;
    }
  }
  
  
  myButton.onclick = () => {
    setUserName();
  };
  