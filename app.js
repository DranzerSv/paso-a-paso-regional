let currentStep = 1;
const barsButtons = document.querySelectorAll(".barButton");
const bars = document.querySelectorAll(".bar");
const instructions = document.querySelectorAll(".instruction");
const titles = document.querySelectorAll(".title");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const images = document.querySelectorAll('img');
const urlParams = new URLSearchParams(window.location.search);
const pais = urlParams.get('pais');

const changeTitle = () => {
  titles.forEach((title) => {
    if (title.id[5] == currentStep) {
      title.classList.add("title-show");
    } else {
      title.classList.remove("title-show");
    }
  });
};

const changeBarStatus = () => {
  bars.forEach((bar) => {
    if (bar.id[3] <= currentStep) {
      bar.classList.add("completed");
    } else {
      bar.classList.remove("completed");
    }
  });
};
const changeInstruction = () => {
  instructions.forEach((instruction) => {
    if (instruction.id[4] == currentStep) {
      instruction.classList.add("show");
    } else {
      instruction.classList.remove("show");
    }
  });
};

const hideBackButton = () => {
  const backButton = document.getElementById('back-button');
  const nextButton = document.getElementById('next-button');

  if (currentStep === 4) {
    nextButton.classList.add('first-page');
  } else {

    nextButton.classList.remove('first-page');
  }
  if (currentStep === 1) {
    backButton.classList.add('first-page');
  } else {

    backButton.classList.remove('first-page');
  }
}

images.forEach(image => {
  // Si la imagen no tiene la clase específica
  if (!image.classList.contains(pais)) {
    // Añadimos la clase 'oculto' para ocultarla
    image.classList.add('hide-img');
  }
});

backButton.addEventListener("click", () => {

  if (currentStep > 1) {
    currentStep -= 1;
  }
  changeTitle();
  changeBarStatus();
  changeInstruction();
  hideBackButton();
});
nextButton.addEventListener("click", () => {

  if (currentStep < 4) {
    currentStep += 1;
  }
  changeTitle();
  changeBarStatus();
  changeInstruction();
  hideBackButton();
});

barsButtons.forEach((barButton) => {
  barButton.addEventListener("click", function () {

    currentStep = parseInt(barButton.id[9]);
    changeTitle();
    changeBarStatus();
    changeInstruction();
    hideBackButton();
  });
});