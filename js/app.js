console.log("Tamagotchi-Mini-Project")

class Tamagotchi {
    constructor (name, hunger, sleepiness, boredom, age){
        this.name = " "; 
        this.hunger = 1; 
        this.boredom = 1; 
        this.sleepiness = 1; 
        this.age = 1; 
        this.alive = true; 
    }; 

    getName = () => {
        return this.name; 
    }

    getHunger = () => {
        return this.hunger; 
    }

    getBoredom = () => {
        return this.boredom; 
    }

    getSleepiness = () => {
        return this.sleepiness; 
    }

    getAge = () => {
        return this.age; 
    }

    goHungry = () => {
      this.hunger += 1;  
    }

    goSleepy = () => {
        this.sleepiness += 1;
    }

    goBored = () => {
        this.boredom += 1;
    }

    goOlder = () => {
        this.age += 1;
    }

    setPetName = (name) => {
        this.name = name;
    }

}


const submitButton = document.querySelector(".petnamebutton");
submitButton.addEventListener("click", handleClickEvent) 

let petName = "";
function handleClickEvent(){
    //code to run once the event fires
    petName = document.querySelector(".name").value;
    //pet.setPetName(petName);
    console.log("Petname in click = "+petName);
}

function updateStats(){
    let age = document.querySelector('#age');
    age.textContent = `Age: ${pet.getAge()}`;
    let hunger = document.querySelector('#hunger');
    hunger.textContent = `Hunger: ${pet.getHunger()}`;
    let sleep = document.querySelector('#sleepiness');
    sleep.textContent = `Sleepiness: ${pet.getSleepiness()}`;
    let boredom = document.querySelector('#boredom');
    boredom.textContent = `Boredom: ${pet.getBoredom()}`;
}

function resetStats(){
    pet.age = 1;
    pet.hunger = 1;
    pet.boredom = 1;
    pet.sleepiness = 1;
}

function sleep(seconds){
    let waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil)
        true;
}


let play = () => {
    
    let start = true;
    let timeCounter = 0;
    let minuteCounter = 0;

    while (start == true){
        timeCounter++;

        
        if (timeCounter % 60 == 0){
            pet.goHungry();
            pet.goSleepy();
            pet.goBored();
            pet.goOlder();
            
            timeCounter = 0;
            minuteCounter++;
            console.log("Minute is now: "+minuteCounter);
        }
        
        //console.log("Hunger = "+pet.getHunger());
        if (minuteCounter == 5){
            console.log("Hunger = "+pet.getHunger());
            start = false;
        }
       
    }
}

if ( petName == ""){
    console.log("Please enter a pet name to play the game");
} else {
    console.log("User entered a pet name = "+petName);
    console.log("Creating a pet now...");
    let pet = new Tamagotchi(petName, 1,1,1,2,true); //instantiate pet
    console.log("Resetting stats...");
    resetStats();
    console.log("Updating stats...");
    updateStats();
    console.log("Play started...");
    play();
    updateStats();
}

  