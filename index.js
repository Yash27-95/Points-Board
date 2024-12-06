let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")

let homeBoardEl = document.getElementById("home-board")
let guestBoardEl = document.getElementById("guest-board")


let hPoints = 0
let gPoints = 0

function homeAddOne() {
    hPoints += 1
    homeEl.textContent = hPoints
    leadingTeam()
}

function homeAddTwo() {
    hPoints += 2
    homeEl.textContent = hPoints
    leadingTeam()
}

function homeAddThree() {
    hPoints += 3
    homeEl.textContent = hPoints
    leadingTeam()
}

function guestAddOne() {
    gPoints += 1
    guestEl.textContent = gPoints
    leadingTeam()
}

function guestAddTwo() {
    gPoints += 2
    guestEl.textContent = gPoints
    leadingTeam()
}

function guestAddThree() {
    gPoints += 3
    guestEl.textContent = gPoints
    leadingTeam()
}

function leadingTeam() {
    if(hPoints > gPoints){
        homeBoardEl.id = "leading"
        guestBoardEl.id = "guest-board"
    }else if (gPoints > hPoints) {
        guestBoardEl.id = "leading"
        homeBoardEl.id = "home-board"
    }else{
        guestBoardEl.id = "guest-board"
        homeBoardEl.id = "home-board" 
    }
}