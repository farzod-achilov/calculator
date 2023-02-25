let show = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    switch (evt.target.innerText) {
      case "=":
        show.value = eval(show.value);
        break;
      case "Delete all":
        show.value = "";
        break;
      default:
        show.value += evt.target.innerText;
    }
  });
});
