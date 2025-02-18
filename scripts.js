let list = document.querySelectorAll(".item")

let next = document.getElementById("next")

let prev = document.getElementById("prev")

let count = list.length

let active = 0


function avanca() {
    
    let ultimoActive = document.querySelector(".active")
    ultimoActive.classList.remove("active")

    active = active >= count -1 ? 0 : active + 1

    list[active].classList.add("active")

}


function volta() {
    
    let ultimoActive = document.querySelector(".active")
    ultimoActive.classList.remove("active")

    active = active <= 0 ? 2 : active - 1

    list[active].classList.add("active")

}




prev.addEventListener("click", volta)

next.addEventListener("click", avanca)