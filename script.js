const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains("active")
  })


  if(currentStep < 0){
    currentStep = 0;
    showCurrentStep();
  }
  
  // console.log(currentStep);

  multiStepForm.addEventListener("click", e => {
    // e.preventDefault()
    let incrementor;
    if(e.target.matches("[data-next]")){
      incrementor = 1;
    }else if(e.target.matches("[data-previous]")){
      incrementor = -1;
    } 
    if(incrementor == null) return;

    const inputs = [...formSteps[currentStep].querySelectorAll("input")];
    const allValid = inputs.every(input => input.reportValidity());
    console.log(allValid);

    if(allValid){

        currentStep += incrementor
        showCurrentStep();
        const title = document.querySelector("#step-title-mobile");
        // console.log(title);
        title.innerText = "Conferma";

        setInterval(() => {
          multiStepForm.submit();
        }, 1000);

    }
    
  })


  function showCurrentStep() {
    formSteps.forEach((step,index)=> {
      step.classList.toggle("active", index === currentStep);

    })
  }