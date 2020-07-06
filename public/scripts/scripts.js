const action = document.querySelectorAll(".action");
const detail = document.querySelectorAll(".detail");
const recipes = document.querySelectorAll(".recipe");

for (let i = 0; i < recipes.length; i++) {
  recipes[i].addEventListener('click', function () {
    window.location.href = `/recipes/${i}`;
  });
}

for (let i = 0; i < action.length; i++) {
  action[i].addEventListener("click", function() {
    if (action[i].textContent == "Esconder") {
      action[i].textContent = "Mostrar";
      detail[i].classList.add("hide");
    }
    else {
      action[i].textContent = "Esconder";
      detail[i].classList.remove("hide");
    }
  })
}