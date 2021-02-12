const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bloodPressureInput = document.querySelector("#bloodPressure");
const bloodSugarInput = document.querySelector("#bloodSugar");
const updateButton = document.querySelector("button.update");
const toast = document.querySelector("#toast");
const newParameters = document.querySelector(".new-parameters")

let parameterType = null;
let shouldNavigateAway = false;

// Function for initiating parameter
async function initParameter() {
  let parameters;

  if (location.search.split("=")[1] === undefined) {
    workout = await API.createParameters()
    console.log(parameters)
  }
  if (parameters) {
    location.search = "?id=" + parameters._id;
  }

}

initParameter();

/*// Function for handeling parameter type change
function handleParameterChange(event) {
  workoutType = event.target.value;
  cardioForm.classList.remove("d-none");
  resistanceForm.classList.add("d-none");
  
  validateInputs();
}*/
validateInputs();
  
// Function for validating input fields
function validateInputs() {
  let isValid = true;
    if (heightInput.value.trim() === "") {
      isValid = false;
    }

    if (weightInput.value.trim() === "") {
      isValid = false;
    }

    if (bloodPressureInput.value.trim() === "") {
      isValid = false;
    }

    if (bloodSugarInput.value.trim() === "") {
      isValid = false;
    }
  }

  if (isValid) {
    updateButton.removeAttribute("disabled");
  } else {
    updateButton.setAttribute("disabled", true);
  }
}

// Function for handeling form submission of exercise
async function handleFormSubmit(event) {
  event.preventDefault();

  let parameterData = {};
    workoutData.height = heightInput.value.trim();
    workoutData.weight = weightInput.value.trim();
    workoutData.bloodPressure = Number(bloodPressureInput.value.trim());
    workoutData.bloodSugar = Number(bloodSugarInput.value.trim());
  

  await API.addParameters(parameterData);
  clearInputs();
  toast.classList.add("success");
}

function handleToastAnimationEnd() {
  toast.removeAttribute("class");
  if (shouldNavigateAway) {
    location.href = "/";
  }
}

// Function for clearing input fields
function clearInputs() {
  heightInput.value = "";
  weightInput.value = "";
  bloodPressureInput.value = "";
  bloodSugarInput.value = "";
}

/*if (workoutTypeSelect) {
  workoutTypeSelect.addEventListener("change", handleWorkoutTypeChange);*/
}
if (updateButton) {
  updateButton.addEventListener("click", function (event) {
    shouldNavigateAway = true;
    handleFormSubmit(event);
  });
}
toast.addEventListener("animationend", handleToastAnimationEnd);

document
  .querySelectorAll("input")
  .forEach(element => element.addEventListener("input", validateInputs));
