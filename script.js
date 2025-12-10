let navBar = document.querySelector("#start")

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add("rolar")
    } else{
        navBar.classList.remove("rolar")
    }
})