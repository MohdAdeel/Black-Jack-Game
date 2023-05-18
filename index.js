let cards = []   //Taking Empty Array, Why ? because i will push random values in it 


let sum = 0         // Taking Sum is equal to zero why ? because when i restart the game i need sum every time equal to zero
let hasBlackJack = false    //taking hasBlackJack False why ? because every time game start with zero and it is obviously no black jack
let isAlive = false        
let message = ""           // Taking Empty Message and assigning the value after execution of loop

let player = {              //Player Details
    name : "Adeel" , 
    chips: 125
}

let messageEl= document.getElementById ("message-el")       //Linked to HTML
let sumEl = document.getElementById ("sum-el")              //Linked to HTML
let cardEl= document.getElementById ("card-el")             //Linked to HTML

let playerEl = document.getElementById ("player-el")        //This will show player details at buttom of the page
playerEl.textContent = player.name + " : $ " +  player.chips

function getRandomCard () {                         //Random Fuction Started for picking up random card
    let rC = Math.floor (Math.random()*13)+1                
    if (rC > 10) {                                  // IF else statement used  
        return 10
    } else if (rC === 1) {
        return 11
    } else {
        return rC
    }
}

function startGame() {                              //New Function for Start Game 
        isAlive = true                              //At beginning we have one life thats why alive is equal to true
    
    let firstCard = getRandomCard ()                //First Card is Picked from GETRANDOMCARD Function
    let secondCard = getRandomCard ()               //Second Card is Picked from GETRANDOMCARD Function

    cards= [firstCard , secondCard]                 //Both Cards will be stored in Cards Empty Array

    sum = firstCard+ secondCard                     //Sum of both cards will be shown 
    renderGame()                                    //calling Render Game Function
}

function renderGame() {                             //Render Game Function Started
    
    sumEl.textContent = "Sum : " + sum              //This Will output the sum of Cards
    cardEl.textContent = "Cards : "                 // Cards will be displayed in output 
    for (let i=0; i<cards.length; i++) {            //For Loop used to iteration 
        cardEl.textContent += cards [i] + ", "         //This will Output the Cards 
    }

    if (sum <= 20){                                 //If statement used to check condition and show message on screen
        message = "Do You Want a new Card"
    } else if (sum === 21) {
        message = "You got BlackJack"
        hasBlackJack= true
        console.log (hasBlackJack)
    } else {
        message = "you are out of the game..."
        isAlive = false
        console.log (isAlive)
    }
    messageEl.textContent = message  
} 

function newCard () {                                 //New Card Function Created from where we can get New Card by clicking on new card Button          
    
    if (isAlive === true && hasBlackJack === false ) {

        let card = getRandomCard ()                   
        sum += card
    
        cards.push (card)
        console.log (cards)
        renderGame ()
    }
}
