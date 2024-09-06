document.addEventListener("DOMContentLoaded", update);

var today = new Date();

function update() {
  const dateElements = document.querySelectorAll(".date p");
  let closestDateElement = null;
  let closestDate = Infinity;

  dateElements.forEach((element) => {
    const elementDate = new Date(element.getAttribute("data-date")); // Get date from data attribute

    if (elementDate < today) {
      element.classList.add("happened");
    } else if (elementDate.toDateString() === today.toDateString()) {
      element.classList.add("today");
    } else {
      element.classList.add("wait");

      const timeDifference = elementDate - today;
      if (timeDifference < closestDate) {
        closestDate = timeDifference;
        closestDateElement = element;
      }
    }
  });

  if (closestDateElement) {
    closestDateElement.classList.remove("wait");
    closestDateElement.classList.add("next");
  }
}
