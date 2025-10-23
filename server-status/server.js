let flag = true
function serverStatus() {

    if (flag === true) {
        document.getElementById("first-state").innerHTML = "Server is running";
        document.body.style.background = "green";
        flag = false;

    } else {
        document.getElementById("secound-state").innerHTML = "server is stopped";
        document.body.style.background = "red";
        flag = true;
    }
}