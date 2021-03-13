function init () {
    let button = document.getElementById("takeoff");
    button.addEventListener("click", takeOffConfirm);
    let land = document.getElementById("landing");
    land.addEventListener("click", landingShuttle);
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", abortingMission);

    let rocket = document.getElementById("rocket");
    rocket.style.position = 'absolute';
    rocket.style.left = '0px';
    rocket.style.bottom = '0px';


    let right = document.getElementById("right");
    right.addEventListener("click", rightClick);
    let left = document.getElementById("left");
    left.addEventListener("click", leftClick);
    let up = document.getElementById("up");
    up.addEventListener("click", upClick);
    let down = document.getElementById("down");
    down.addEventListener("click", downClick);

}

function takeOffConfirm() {
    let result = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (result) {
    document.getElementById("flightStatus").innerHTML = "Confirm that the shuttle is ready for takeoff";
    document.getElementById("shuttleBackground").style.backgroundColor = "blue"; 
    document.getElementById("spaceShuttleHeight").innerHTML = "10000";
    }
}

function landingShuttle() {
    window.confirm("The shuttle is landing. Landing gear engaged")
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green"; 
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }

function abortingMission() {
    let result = window.confirm("Confirm that you want to abort the mission.")
    if (result) {
    document.getElementById("flightStatus").innerHTML = "Mission aborted";
    document.getElementById("shuttleBackground").style.backgroundColor = "green"; 
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
}

function rightClick() {
movement = parseInt(rocket.style.left) + 10 + 'px';
rocket.style.left = movement;
}

function leftClick() {
movement = parseInt(rocket.style.left) - 10 + 'px';
rocket.style.left = movement;
}

function upClick() {
movement = parseInt(rocket.style.bottom) + 10 + 'px';
rocket.style.bottom = movement;
}

function downClick() {
movement = parseInt(rocket.style.bottom) - 10 + 'px';
rocket.style.bottom = movement; 
}







window.addEventListener("load", init);