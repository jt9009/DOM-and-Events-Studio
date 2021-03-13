function init () {
    let button = document.getElementById("takeoff");
    button.addEventListener("click", takeOffConfirm);
    let land = document.getElementById("landing");
    land.addEventListener("click", landingShuttle);
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", abortingMission);

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





window.addEventListener("load", init);