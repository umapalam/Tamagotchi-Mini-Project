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

    lessHungry = () => {
        this.hunger -= 1;  
    }

    lessSleepy = () => {
        this.sleepiness -=1; 
    }

    lessBored = () => {
        this.boredom -=1; 
    }


    goSleepy = () => {
        this.sleepiness +=1;
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
let pet;

function handleClickEvent(){
    //code to run once the event fires
    petName = document.querySelector(".name").value;
    //pet.setPetName(petName);
    console.log("Petname in click = "+petName);
    console.log("User entered a pet name = "+petName);
    console.log("Creating a pet now...");
    pet = new Tamagotchi(petName, 1,1,1,2,true); //instantiate pet
    console.log("Resetting stats...");
    resetStats(pet);
    console.log("Updating stats...");
    updateStats(pet);
    console.log("Play started...");
    play(pet);
    updateStats(pet);
}

const feedButton = document.querySelector(".feedButton");
feedButton.addEventListener("click", handleFeedClickEvent1);

function handleFeedClickEvent1(){
    console.log("Feed button is clicked...");
    pet.lessHungry();
    updateStats(pet);
}

const sleepButton = document.querySelector(".sleepButton");
sleepButton.addEventListener("click", handleFeedClickEvent2);

function handleFeedClickEvent2(){
    console.log("Sleep button is clicked...");
    pet.lessSleepy();
    updateStats(pet);
}

const playButton = document.querySelector(".playButton");
playButton.addEventListener("click", handleFeedClickEvent3);

function handleFeedClickEvent3(){
    console.log("Play button is clicked...");
    pet.lessBored();
    updateStats(pet);
}

function updateStats(animal){
    let age = document.querySelector('#age');
    age.textContent = `Age: ${animal.getAge()}`;
    let hunger = document.querySelector('#hunger');
    hunger.textContent = `Hunger: ${animal.getHunger()}`;
    let sleep = document.querySelector('#sleepiness');
    sleep.textContent = `Sleepiness: ${animal.getSleepiness()}`;
    let boredom = document.querySelector('#boredom');
    boredom.textContent = `Boredom: ${animal.getBoredom()}`;
}

function resetStats(animal){
    animal.age = 1;
    animal.hunger = 1;
    animal.boredom = 1;
    animal.sleepiness = 1;
}

// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }


// let play = (animal) => {
    
//     let start = true;
//     let timeCounter = 0;

//     while (start == true){

//         timeCounter++;

//         if (timeCounter % 60000 == 0){
//             animal.goHungry();
//             animal.goSleepy();
//             animal.goBored();
//             animal.goOlder();
            
//             timeCounter = 0;
//             console.log("timer up");
//         }
        
//         console.log("Hunger = "+pet.getHunger());
//         let hungerCount = animal.getHunger();
//         let sleepyCount = animal.goSleepy();
//         let boredCount = animal.goBored();
//         if (hungerCount == 10 || sleepyCount == 10 || boredCount == 10){
//             console.log("Hunger = "+animal.getHunger());
//             start = false;
//         }      
//     }
// }

let play = (animal) => {
    let time = 0;
    let interval = setInterval(  () =>{
            console.log("a second")

            time++; 
            console.log(time)
            if (time % 3 == 0){
                animal.goHungry();
                animal.goSleepy();
                animal.goBored();
                animal.goOlder();
                console.log("every 3 seconds"); 
                updateStats(animal)
            }
            console.log("Hunger = "+pet.getHunger());
            let hungerCount = animal.getHunger();
            let sleepyCount = animal.getSleepiness();
            let boredCount = animal.getBoredom();
            if (hungerCount == 10 || sleepyCount == 10 || boredCount == 10){
                console.log("Hunger = "+animal.getHunger());
                start = false;
                clearInterval(interval)
            }  
            
    }, 3000)

} 
