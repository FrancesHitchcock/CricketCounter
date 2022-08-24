let saveEl = document.getElementById("innings-el")
let countEl = document.getElementById("count-el")
let totalRunsEl = document.getElementById("total-runs-el")
let totalRuns = 0
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    totalRuns += 1
    totalRunsEl.textContent = totalRuns
}

function save() {
    let countStr = count + " : "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
