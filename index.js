let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")
let countHome = 0
let countGuest = 0
let elHome = document.getElementById("elHome")
let elGuest = document.getElementById("elGuest")

// home functions
function plusOneHome(){
    countHome += 1
    homeEl.textContent = countHome
    winningTeam()      
}
function plusTwoHome(){
    countHome += 2
    homeEl.textContent = countHome
    winningTeam()      
}
function plusThreeHome(){
    countHome += 3
    homeEl.textContent = countHome
    winningTeam()      
}

//guest functions
function plusOneGuest(){
    countGuest += 1
    guestEl.textContent = countGuest
    winningTeam()     
}
function plusTwoGuest(){
    countGuest += 2
    guestEl.textContent = countGuest
    winningTeam()     
}
function plusThreeGuest(){
    countGuest += 3
    guestEl.textContent = countGuest
    winningTeam()    
}

// reset scoreboard function
function reset(){
    homeEl.textContent = 0
    guestEl.textContent = 0
    countHome = 0
    countGuest = 0
    winningTeam()
}

// highlight winning team
function winningTeam() {
    if (countHome > countGuest) {
        elHome.innerHTML = "<strong>HOME</strong>"
        elGuest.innerHTML = "AWAY"
    } else if (countGuest > countHome) {
        elHome.innerHTML = "HOME"
        elGuest.innerHTML = "<strong>AWAY</strong>"
    } else {
        elHome.innerHTML = "HOME"
        elGuest.innerHTML = "AWAY"
    }
}