const answers = {
  blank1: "totpol",
  blank2: "uncut",
};

function checkAnswers() {
  let score = 0;

  Object.keys(answers).forEach((id) => {
    const select = document.getElementById(id);
    const value = select.value.toLowerCase();

    if (value) {
      if (value === answers[id]) {
        select.classList.add("correct");
        select.classList.remove("incorrect");
        score++;
      } else {
        select.classList.add("incorrect");
        select.classList.remove("correct");
      }
    } else {
      select.classList.remove("correct", "incorrect");
    }
  });

  document.getElementById("score").textContent = `Score: ${score}/${
    Object.keys(answers).length
  }`;
}

Object.keys(answers).forEach((id) => {
  document.getElementById(id).addEventListener("change", checkAnswers);
});
