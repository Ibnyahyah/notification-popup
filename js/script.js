const button = document.getElementById("btn");
const container = document.getElementById("container");

button.addEventListener("click", createNotification);

function createNotification(){
    const notify = document.createElement("div");
    notify.classList.add("pop-up");
    container.appendChild(notify);
    notify.innerHTML = " Thank you for always reviewing my project.";

    setTimeout(
        function(){
            notify.remove();
        },
        5000
    );
}