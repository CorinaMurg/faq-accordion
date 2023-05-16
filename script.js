const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      checkboxes.forEach((ele) => {
        if (ele !== e.target) {
          ele.checked = false;
        }
      });
    }
  });
});

