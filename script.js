const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    questions.forEach((q) => {
      if (q !== question) {
        q.parentElement.open = false;
      }
    });
  });
});



