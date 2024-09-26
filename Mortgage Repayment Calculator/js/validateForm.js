import calculateRepayments from "./mortgageCalculation.js"

const validForm = () => {
    const inputElements = document.querySelectorAll("input[type='number']")
    for (const input of inputElements) {
        if (input.value === "") return false
    }
    return true && radioInputWasSelected()
}

const radioInputWasSelected = () => {
    const radioInputs = document.querySelectorAll("input[name='mortgage-type']")
    for (let input of radioInputs) {
        if (input.checked) return true
    }
    return false
}

const addRequiredRadio = () => {
    const typeContainer = document.querySelector(".type-field")
    typeContainer.querySelector(".required").classList.remove("hidden")
}

const removeRequiredRadio = () => {
    const typeContainer = document.querySelector(".type-field")
    typeContainer.querySelector(".required").classList.add("hidden")
}

const requiredValues = () => {
    if (!radioInputWasSelected()) {
        addRequiredRadio()
    }
    const inputElements = document.querySelectorAll("input[type='number']")
    inputElements.forEach(input => verifyValue(input))    
}

const handleSubmit = e => {
    e.preventDefault()
    if (validForm()) {
        calculateRepayments(e.target)
    } else {
        requiredValues()
    }
}

const addRequiredField = (name) => {
    const fieldContainer = document.querySelector(`.${name}-field`);
    fieldContainer.querySelector(".field").classList.add("required-field")
    fieldContainer.querySelector(".label-block").classList.add("required-label-block")
    fieldContainer.querySelector(".required").classList.remove("hidden")
}

const removeRequiredField = (name) => {
    const fieldContainer = document.querySelector(`.${name}-field`);
    fieldContainer.querySelector(".field").classList.remove("required-field")
    fieldContainer.querySelector(".label-block").classList.remove("required-label-block")
    fieldContainer.querySelector(".required").classList.add("hidden")
}

const verifyValue = (input) => {
    const value = input.value
    value === "" ? addRequiredField(input.name) : removeRequiredField(input.name)
}

const validateFormEvents = () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", handleSubmit)

    const radioInputs = document.querySelectorAll("input[name='mortgage-type']")
    radioInputs.forEach(input => input.addEventListener("change", removeRequiredRadio))
    
    const inputElements = document.querySelectorAll("input[type='number']")
    inputElements.forEach(input => input.addEventListener("blur", () => verifyValue(input)))
}

export default validateFormEvents