const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    ModeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        ModeText.innerHTML = "Light Mode";
    } else {
        ModeText.innerHTML = "Dark Mode";
    }
});
let a1 = document.getElementById("item1");
let a2 = document.getElementById("item2");
let a3 = document.getElementById("item3");
let a4 = document.getElementById("item4");
let a5 = document.getElementById("item5");
let a6 = document.getElementById("item6");
let a7 = document.getElementById("item7");
let a8 = document.getElementById("item8");
let old = document.getElementById("log").value
a1.addEventListener("click", () => {
    document.getElementById("log").value = "Search was Clicked"
})
a2.addEventListener("click", () => {
    document.getElementById("log").value = "Dashboard was Clicked"
})
a3.addEventListener("click", () => {
    document.getElementById("log").value = "Revenue was Clicked"
})
a4.addEventListener("click", () => {
    document.getElementById("log").value = "Notifications was Clicked"
})
a5.addEventListener("click", () => {
    document.getElementById("log").value = "Analytics was Clicked"
})
a6.addEventListener("click", () => {
    document.getElementById("log").value = "Likes was Clicked"
})
a7.addEventListener("click", () => {
    document.getElementById("log").value = "Wallets was Clicked"
})
a8.addEventListener("click", () => {
    document.getElementById("log").value = "LOgout was Clicked"
})