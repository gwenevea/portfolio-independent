document.querySelector("#darkmode").addEventListener("click", function () {
    if ((document.querySelector('#darkmode').innerHTML) == "Dark Mode") {
        console.log("Going dark mode");
        const form = document.querySelector("form");
        form.classList.add('dark-mode');
        document.querySelector('#darkmode').innerHTML = "Light Mode";
    }

    else {
        console.log("Going light mode");
        const form = document.querySelector("form");
        form.classList.remove('dark-mode');
        document.querySelector('#darkmode').innerHTML = "Dark Mode";
    }

});