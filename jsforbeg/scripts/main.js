const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/*document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
  });*/


  document.querySelector("h1").addEventListener("click", () => {
    myHeading.textContent = "You Unlocked the secret.";
  });