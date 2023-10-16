const spiner = document.querySelector(".spinner");
const ERROR_MESSAGE = "Error occurred ";
const SUCCESS_MESSAGE = "Load Data Successful!";

function getAccounts() {
  fetch("/accounts")
    .then((res) => res.json())
    .then((data) => { 
      const mainDiv = document.querySelector(".wrapper");
      const list = document.createElement("ul");
      mainDiv.append(list);

      data.forEach((element) => {
        const item = document.createElement("li");
        item.textContent = `AccountId: ${element.id} (Name: ${element.name}, Industry ${element.industry})`;
        list.append(item);
      });
      spiner.classList.add("hidden");

      customToast(
        SUCCESS_MESSAGE,
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    })
    .catch((error) => {
      customToast(ERROR + error, "red");
      spiner.classList.add("hidden");
      console.error(error);
    });
}
getAccounts();

function customToast(message, color) {
  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: color,
    },
  }).showToast();
}
