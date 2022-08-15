// Taking the inputs
let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')

let homeCount = 0
let guestCount = 0

// Adding points to the Home team
function addHome1(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function addHome2(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function addHome3(){
    homeCount += 3
    homeScore.textContent = homeCount
}

// Adding points to the Guest team
function addGuest1(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function addGuest2(){
    guestCount +=2 
    guestScore.textContent = guestCount
}
function addGuest3(){
    guestCount += 3
    guestScore.textContent = guestCount
}