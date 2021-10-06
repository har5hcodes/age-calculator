

const startEl = document.getElementById("start-el")
const displayEl = document.getElementById("display-el")

startEl.addEventListener("click", function () {
    let dobEl = document.getElementById("dob-el").value
    if (isNaN(new Date(dobEl))) {
        displayEl.textContent = `Enter your Date of Birth`
    }
    else {
        let today = new Date()
        let age = Math.floor((today - new Date(dobEl)) / 1000 / 60 / 60 / 24 / 365)
        if (age < 0) {
            displayEl.textContent = `Invalid Input`
        } else {
            displayEl.textContent = `${age}`
        }
    }
})
