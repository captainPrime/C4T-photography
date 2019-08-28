let menu = document.getElementById("menu")
let navigation = document.getElementById("navigation");
let close = document.getElementById("close")
menu.addEventListener("click", () => {
    if (navigation.style.visibility = "hidden") {
        navigation.style.visibility = "visible";
        menu.style.visibility = "hidden";
    }

})

close.addEventListener("click", () => {
    if (navigation.style.visibility = "visible") {
        navigation.style.visibility = "hidden"
        menu.style.visibility = "visible";
    }

})



