const hideResults = () => {
    document.querySelector(".no-result").classList.remove("hidden")
    document.querySelector(".calculated-result").classList.add("hidden")
}

const clearAll = () => {
    const inputElements = document.querySelectorAll("input[type='number']")
    inputElements.forEach(input => input.value = "")
    const radioInputs = document.querySelectorAll("input[name='mortgage-type']")
    radioInputs.forEach(input => input.checked = false)
    hideResults()
}

const activateClearAllButtonEvent = () => {
    document.getElementById("clear-all").addEventListener("click", clearAll)
}

export default activateClearAllButtonEvent