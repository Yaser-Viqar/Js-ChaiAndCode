const btn = document.querySelector('#button')
const inp = document.querySelector('#text')
const listcontainer = document.querySelector('#listcontainer')

btn.addEventListener('click', () => {
    if (inp.value === '') {
        alert("enter task")
    } else {
        let element = document.createElement("li")
        element.innerHTML = inp.value
        listcontainer.appendChild(element)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        element.appendChild(span)

        saveData()
    }
    inp.value = ''
})

// ✅ Event Delegation
listcontainer.addEventListener('click', (e) => {

    // ❌ delete
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }

    // ✔ complete toggle
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    }
})

// ✅ localStorage functions
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showData() {
    listcontainer.innerHTML = localStorage.getItem("data") || ""
}

// ✅ load saved data
showData()
