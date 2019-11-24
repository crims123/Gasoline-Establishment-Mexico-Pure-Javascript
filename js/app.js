const ui = new UI();
const search = document.querySelector(".form-control");

document.addEventListener("DOMContentLoaded", () => {
  ui.showEstablishment();
});

search.addEventListener("input", () => {
  if (search.value.length >= 4) {
    ui.showSearchMarkers(search.value);
  }

  if (search.value.length == 0) {
    ui.showEstablishment();
  }
});
