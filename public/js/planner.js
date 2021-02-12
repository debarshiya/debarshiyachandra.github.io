const medicineInput = document.querySelector("#medicine");
const bloodTestInput = document.querySelector("#bloodTest");
const updateButton = document.querySelector("button.update");
const toast = document.querySelector("#toast");
const newDetails = document.querySelector(".new-details")

let detailsType = null;
let shouldNavigateAway = false;

// Function for initiating parameter
async function initDetails() {
  let details;

  if (location.search.split("=")[1] === undefined) {
    workout = await API.createDetails()
    console.log(details)
  }
  if (details) {
    location.search = "?id=" + details._id;
  }

}

initDetails();

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
    if (medicineInput.value.trim() === "") {
      isValid = false;
    }

    if (bloodTestInput.value.trim() === "") {
      isValid = false;
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

  let detailsData = {};
    workoutData.medicine = medicineInput.value.trim();
    workoutData.bloodTest = bloodTestInput.value.trim();
  

  await API.addDetails(detailsData);
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
  medicineInput.value = "";
  bloodTestInput.value = "";
}

/*if (workoutTypeSelect) {
  workoutTypeSelect.addEventListener("change", handleWorkoutTypeChange);
}*/
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
