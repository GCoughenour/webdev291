/*
ANIMAL GUESSING GAME MIDTERM PROJECT 2018 GARRICK COUGHENOUR

Algorithm:

~ in front of a line means complete.

~COMPUTE a getRandomNumber function from 1-20.
~SAVE randomNumber as a variable.
~SAVE all animals in a animals object.
~COMPUTE a getAnimal function that uses randomNumber to determine which animal to show.
~OUTPUT animalImage.
~INPUT user animalGuess.
~SAVE animalGuess.
~COMPUTE whether animalGuess is equal to animalImage.
  ~if animalGuess == animalImage then display "Good job, you guessed the animal!".
  ~include image of animal, as well as small bio about animal.
    ~if animalGuess != animalImage display "Incorrect, better luck next time!".
~COMPUTE how many times the user has guessed the animal incorrectly.
~SAVE numberOfGuesses.
~COMPUTE if numberOfGuesses == 3 OUTPUT "Sorry, you've ran out of guesses! GAME OVER.
  ~You score was: " + correctGuesses.
~INPUT user click "Give me a hint!".
~COMPUTE if numberOfHints <= 2.
~  if above is true OUTPUT one fact about animal
~  if above is false OUTPUT "You are only allowed two guesses per game!"
~COMPUTE if user guess all 20 animals correctly OUTPUT "Good job! You guessed all the animals
  correctly!"

ANIMALS
1. Monkey
2. Elephant
3. Hippo
4. Cow
5. Horse
6. Lion
7. Deer
8. Bird
9. Gorilla
10. Goat
11. Wolf
12. Lizard
13. Unicorn
14. Rhino
15. Centaur
16. Dragon
17. Squirrel
18. Rat
19. Snake
20. Spider
*/



document.write("<h1>Animal Guessing Game</h1>");

//document.write("<img src = \"images/monkeysil.png\"");
var randomNumber;
var animalToGuess = "";
/*var animal = {
  Monkey: "Monkey",
  Elephant: "Elephant",
  Hippo: "Hippo",
  Cow: "Cow",
  Horse: "Horse",
  Lion: "Lion",
  Deer: "Deer",
  Bird: "Bird",
  Gorilla: "Gorilla",
  Goat: "Goat",
  Wolf: "Wolf",
  Lizard: "Lizard",
  Unicorn: "Unicorn",
  Rhino: "Rhino",
  Centaur: "Centaur",
  Dragon: "Dragon",
  Squirrel: "Squirrel",
  Rat: "Rat",
  Snake: "Snake",
  Spider: "Spider"
};*/

var monkey = {
  animal: "monkey",
  picture: "images/monkeysil.png",
  bio: "Monkeys can understand written numbers and can even count. They can also understand basic parts of arithmetic and even, in rare cases, multiplication. https://www.factretriever.com/monkey-facts",
  hint: "This animal is very closely related to humans"
};


var elephant = {
  animal: "elephant",
  picture: "images/elephantsil.png",
  bio: "An elephant’s trunk weighs around 400 pounds and contains around 100,000 different muscles. https://greenglobaltravel.com/facts-about-elephants-world-elephant-day/",
  hint: "This animal is one of the biggest animals in the world"
};
var hippo = {
  animal: "hippo",
  picture: "images/hipposil.png",
  bio: "The name Hippopotamus comes from the Ancient Greek 'river horse'. https://onekindplanet.org/animal/hippopotamus/",
  hint: "This animal is really fat and lives in the savannah"
};
var cow = {
  animal: "cow",
  picture: "images/cowsil.png",
  bio: "Cows are red-green colorblind. In a bullfight, its the waving of the cape that attracts the bull not the red color. http://www.dairymoos.com/interesting-facts-about-cows/",
  hint: "Milk comes from these animals!"
};
var horse = {
  animal: "horse",
  picture: "images/horsesil.png",
  bio: "Estimates suggest that there are around 60 million horses in the world. http://www.sciencekids.co.nz/sciencefacts/animals/horse.html",
  hint: "Humans have been using these animals for transporation for years!"
};
var lion = {
  animal: "lion",
  picture: "images/lionsil.png",
  bio: "Pride members keep track of one another by roaring. Both males and females have a very powerful roar that can be heard up to 8 km (5 mi.) away. https://animalfactguide.com/animal-facts/lion/",
  hint: "This animal is considered the \"King of the Jungle\""
};
var deer = {
  animal: "deer",
  picture: "images/deersil.png",
  bio: "A fawn can normally walk within half an hour of being born. Fawns do not have a smell, helping them avoid predators. https://onekindplanet.org/animal/deer/",
  hint: "This animal is the same animal Bambi was!"
};
var bird = {
  animal: "bird",
  picture: "images/birdsil.png",
  bio: "There are around 10000 different species of birds worldwide. http://www.sciencekids.co.nz/sciencefacts/animals/bird.html",
  hint: "This animal can fly!"
};
var gorilla = {
  animal: "gorilla",
  picture: "images/gorillasil.png",
  bio: "Gorillas have unique noseprints, much like human fingerprints, which can be used to identify individuals. https://www.discoverwildlife.com/animal-facts/mammals/facts-about-gorillas/",
  hint: "This animal is a larger mammal, as well as a close relative of humans"
};
var goat = {
  animal: "goat",
  picture: "images/goatsil.png",
  bio: "Goats were one of the first animals to be tamed by humans and were being herded 9,000 years ago. https://livelyrun.com/from-the-farmer/goat-fun-facts/",
  hint: "This animal can be found on mountains."
};
var wolf = {
  animal: "wolf",
  picture: "images/wolfsil.png",
  bio: "The hierarchy that exists within each pack is maintained by dominant or submissive body posturing, and by other behaviour patterns such as the communal care of the young. https://onekindplanet.org/animal/wolf-grey/",
  hint: "This animal is closely related to dogs"
};
var lizard = {
  animal: "lizard",
  picture: "images/lizardsil.png",
  bio: "A lizard can break off part of its tail if being attacked. The predator is often distracted and eats the tail as the lizard escapes. The lizard will regrow the tail. https://kidskonnect.com/animals/lizard/",
  hint: "This animal is cold-blooded"
};
var unicorn = {
  animal: "unicorn",
  picture: "images/unicornsil.png",
  bio: "If a Unicorn and a Pegasus mate, the babies may become flying Unicorns. https://www.seriousfacts.com/unicorn-facts/",
  hint: "This animal is like a horse"
};
var rhino = {
  animal: "rhino",
  picture: "images/rhinosil.png",
  bio: "A group of rhinos is called a crash. https://www.discoverwildlife.com/animal-facts/mammals/12-amazing-rhino-facts-you-might-not-know/",
  hint: "This animal has a big horn coming from its forhead"
};
var centaur = {
  animal: "centaur",
  picture: "images/centaursil.png",
  bio: "The myth of centaurs continued through Roman mythology and later existed in medieval bestiaries. https://greekgodsandgoddesses.net/myths/centaurs/",
  hint: "This animal comes from greek mythology"
};
var dragon = {
  animal: "dragon",
  picture: "images/dragonsil.png",
  bio: "Ancient Greeks and Sumerians spoke of giant “flying serpents” in their scrolls and lectures. Dragons are depicted as snake- or reptile-like. https://www.surpriseride.com/16-fun-facts-dragons/",
  hint: "This animal breathes fire"
};
var squirrel = {
  animal: "squirrel",
  picture: "images/squirrelsil.png",
  bio: "A squirrel's front teeth never stop growing. https://blog.nwf.org/2015/01/10-nutty-facts-to-make-you-appreciate-squirrels/",
  hint: "This animal has a love for nuts"
};
var rat = {
  animal: "rat",
  picture: "images/ratsil.png",
  bio: "Without companionship rats tend to become lonely and depressed. https://onekindplanet.org/animal/rat/",
  hint: "This animal is considered gross and unclean"
};
var snake = {
  animal: "snake",
  picture: "images/snakesil.png",
  bio: "Snakes smell with their tongue. http://www.sciencekids.co.nz/sciencefacts/animals/snake.html",
  hint: "This animal is long and slithery"
};
var spider = {
  animal: "spider",
  picture: "images/spidersil.png",
  bio: "There are around 40000 different species of spider. http://www.sciencekids.co.nz/sciencefacts/animals/spider.html",
  hint: "This animal has eight legs"
};
//newcount for animals 0-19
var animals= [monkey, elephant, hippo, cow, horse, lion, deer, bird, gorilla, goat, wolf, lizard, unicorn, rhino, centaur, dragon, squirrel, rat, snake, spider];

var wrongGuesses = 0;
var rightGuesses = 0;
var hints = 0;


//getImage("images/monkeysil.png", 10, 10);
//initialize getRandomNumber function
var getRandomNumber = function(max){
  randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * max);
  console.log("Number = " + randomNumber);
}

var checkScore = function(){
  if(hints == 2){
    document.getElementById("giveHint").disabled = true;
  }
  if(rightGuesses == 20){
    document.write("<h1>Congratulations you won the game with a score of 20!</h1>");
  }
  if(wrongGuesses == 3){
    document.write("<h1>Sorry, but you missed too many animals. GAME OVER.</h1>")
  }

}


var getAnimal = function(){
  getRandomNumber(20);
  document.getElementById("result").textContent = "";
  document.getElementById("bio").textContent = "";
  document.getElementById("hint").textContent = "";
  if(randomNumber == 0){
    animalToGuess = animals[0].animal;
    picture.setAttribute("src", animals[0].picture);

  } else if (randomNumber == 1){
    animalToGuess = animals[1].animal;
    picture.setAttribute("src", animals[1].picture);
  } else if (randomNumber == 2){
    animalToGuess = animals[2].animal;
    picture.setAttribute("src", animals[2].picture);
  } else if (randomNumber == 3){
    animalToGuess = animals[3].animal;
    picture.setAttribute("src", animals[3].picture);
  } else if (randomNumber == 4){
    animalToGuess = animals[4].animal;
    picture.setAttribute("src", animals[4].picture);
  } else if (randomNumber == 5){
    animalToGuess = animals[5].animal;
    picture.setAttribute("src", animals[5].picture);
  } else if (randomNumber == 6){
    animalToGuess = animals[6].animal;
    picture.setAttribute("src", animals[6].picture);
}   else if (randomNumber == 7){
  animalToGuess = animals[7].animal;
  picture.setAttribute("src", animals[7].picture);
}   else if (randomNumber == 8){
  animalToGuess = animals[8].animal;
  picture.setAttribute("src", animals[8].picture);
}   else if (randomNumber == 9){
  animalToGuess = animals[9].animal;
  picture.setAttribute("src", animals[9].picture);
}   else if (randomNumber == 10){
  animalToGuess = animals[10].animal;
  picture.setAttribute("src", animals[10].picture);
}   else if (randomNumber == 11){
  animalToGuess = animals[11].animal;
  picture.setAttribute("src", animals[11].picture);
}   else if (randomNumber == 12){
  animalToGuess = animals[12].animal;
  picture.setAttribute("src", animals[12].picture);
}   else if (randomNumber == 13){
  animalToGuess = animals[13].animal;
  picture.setAttribute("src", animals[13].picture);
}   else if (randomNumber == 14){
  animalToGuess = animals[14].animal;
  picture.setAttribute("src", animals[14].picture);
}   else if (randomNumber == 15){
  animalToGuess = animals[15].animal;
  picture.setAttribute("src", animals[15].picture);
}   else if (randomNumber == 16){
  animalToGuess = animals[16].animal;
  picture.setAttribute("src", animals[16].picture);
}   else if (randomNumber == 17){
  animalToGuess = animals[17].animal;
  picture.setAttribute("src", animals[17].picture);
}   else if (randomNumber == 18){
  animalToGuess = animals[18].animal;
  picture.setAttribute("src", animals[18].picture);
}   else if (randomNumber == 19){
  animalToGuess = animals[19].animal;
  picture.setAttribute("src", animals[19].picture);
}
document.getElementById("guessCheck").disabled = false;
document.getElementById("next").disabled = true;
document.getElementById("guess").value = "";


}



var checkGuess = function(){
    var result = document.getElementById("result");
    var guess = document.getElementById("guess").value;
    var correct = document.getElementById("correct");
    var incorrect = document.getElementById("incorrect");
    var bio = document.getElementById("bio");
    guess = guess.toLowerCase();
    if(randomNumber == 0 && guess == animals[0].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[0].bio;
      correct.value = rightGuesses;
    } else if(randomNumber == 1 && guess == animals[1].animal){
        result.textContent = "Good job you guessed right!";
        rightGuesses++;
        bio.textContent = animals[1].bio;
correct.value = rightGuesses;
    } else if(randomNumber == 2 && guess == animals[2].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[2].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 3 && guess == animals[3].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[3].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 4 && guess == animals[4].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[4].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 5 && guess == animals[5].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[5].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 6 && guess == animals[6].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[6].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 7 && guess == animals[7].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[7].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 8 && guess == animals[8].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[8].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 9 && guess == animals[9].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[9].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 10 && guess == animals[10].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[10].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 11 && guess == animals[11].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[11].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 12 && guess == animals[12].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[12].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 13 && guess == animals[13].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[13].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 14 && guess == animals[14].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[14].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 15 && guess == animals[15].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[15].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 16 && guess == animals[16].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[16].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 17 && guess == animals[17].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[17].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 18 && guess == animals[18].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[18].bio;
      correct.textContent = rightGuesses;
    } else if(randomNumber == 19 && guess == animals[19].animal){
      result.textContent = "Good job you guessed right!";
      rightGuesses++;
      bio.textContent = animals[19].bio;
      correct.textContent = rightGuesses;
    } else {
      result.textContent = "Sorry thats incorrect!";
      wrongGuesses++;
      incorrect.textContent = wrongGuesses;
    }
    enableNext();
    checkScore();

}



var enableNext = function(){
document.getElementById("guessCheck").disabled = true;
document.getElementById("next").disabled = false;

}

var getHint = function(){
  var hint = document.getElementById("hint");
  if(randomNumber == 0){
    hint.textContent = animals[randomNumber].hint;

  } else if (randomNumber == 1){
    hint.textContent = animals[randomNumber].hint;
  } else if (randomNumber == 2){
    hint.textContent = animals[randomNumber].hint;
  } else if (randomNumber == 3){
    hint.textContent = animals[randomNumber].hint;
  } else if (randomNumber == 4){
    hint.textContent = animals[randomNumber].hint;
  } else if (randomNumber == 5){
    hint.textContent = animals[randomNumber].hint;
  } else if (randomNumber == 6){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 7){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 8){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 9){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 10){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 11){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 12){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 13){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 14){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 15){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 16){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 17){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 18){
    hint.textContent = animals[randomNumber].hint;
}   else if (randomNumber == 19){
    hint.textContent = animals[randomNumber].hint;
}
  hints++;
}

window.onload = function(){
  //creates the button to check guess
  var checkButton = document.createElement("button");
  checkButton.setAttribute("id", "guessCheck");
  checkButton.innerHTML = "Enter";
  document.getElementById("button").appendChild(checkButton);
  document.getElementById("guessCheck").onclick = checkGuess;
  //creates button to go to next animal
  var nextAnimal = document.createElement("button");
  nextAnimal.setAttribute("id", "next" );
  nextAnimal.disabled = true;
  nextAnimal.innerHTML = "Next Animal";
  document.getElementById("button").appendChild(nextAnimal);
  document.getElementById('next').onclick = getAnimal;
  //creates the hint button
  var hint = document.createElement("button");
  hint.setAttribute("id", "giveHint");
  hint.innerHTML = "Give me a hint!";
  document.getElementById("button").appendChild(hint);
  document.getElementById("giveHint").onclick = getHint;

  getAnimal();

}
