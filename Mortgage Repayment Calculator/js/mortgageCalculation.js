const repayment = (amount, term, interest) => {    
    const r = interest / 100 / 12
    const n = term * 12
    const formulaA = (1 + r) ** n
    const formulaB = (r * formulaA) / (formulaA - 1)
    return amount * formulaB
}

const interestOnly = (amount, interest) => {
    return amount * (interest / 100) / 12
}

const showResults = () => {
    document.querySelector(".no-result").classList.add("hidden")
    document.querySelector(".calculated-result").classList.remove("hidden")
}

const displayResults = (monthlyRepayment, totalRepayment) => {
    const monthlyRepaymentP = document.querySelector(".monthly-repayment span")
    const totalRepaymentP = document.querySelector(".total-repayment span")
    monthlyRepaymentP.textContent = parseFloat(monthlyRepayment.toFixed(2)).toLocaleString();
    totalRepaymentP.textContent = parseFloat(totalRepayment.toFixed(2)).toLocaleString();
    showResults()
}

const calculateRepayments = (form) => {
    const formData = new FormData(form)
    const amount = Number(formData.get("amount"))
    const term = Number(formData.get("term"))
    const interest = Number(formData.get("interest"))
    const type = formData.get("mortgage-type")    
    const monthlyCalc = type === "repayment" ? repayment(amount, term, interest) : interestOnly(amount, interest)
    const totalCalc = monthlyCalc * (term * 12)
    displayResults(monthlyCalc, totalCalc)
}

export default calculateRepayments