//////////////////////////////////////////////////////////////////
//
// Fortune Cookie Generator - Kevin Hudson 10/16/16
//
//////////////////////////////////////////


var generateFortuneCookie = function() {
  // This is where your code for the Fortune Cookie generator goes.
  // You will use the fortunesList variable defined lower in this file
  // to supply your fortune cookies with text.

  // TODO: Grab the paragraph with the ID
  // `fortune-cookie-text` to be able to insert text into that element.

  // TODO: Update the Previous Fortunes list with the current `innerHTML
  // value of `#fortune-cookie-text`. Follow these steps:
  // 1. Create a new `li` element with the `document.createElement()` method.
  // 2. Set the `innerHTML` of that element equal to the `innerHTML` of
  //    the `#fortune-cookie-text` element.
  // 3. Select the `#previous-fortunes-container` container and use
  //    `appendChild()` to append the new `li` element you created above.
  // 4. You should see the previous fortune cookie saying show up in the list.
  // TODO: Select a new (random) fortune cookie saying from the data stored in the
  // `fortunesList` variable. (HINT: You will use `Math.floor()` and
  // `Math.random()` to accomplish this.) Use this data to update the
  // `innerText` of the `#fortune-cookie-text` element.



  var fortuneT = document.getElementById('fortune-cookie-text'); // assigning fortune-cookie-text HTML element to new variable fortuneT
  var newLi = document.createElement('li'); // self explanatory here - created new li element 
  newLi.innerHTML = fortuneT.innerHTML; // innerHTML element equals the variable newLI whih is a new list element created up top 
  var previousC = document.getElementById('previous-fortunes-container'); // equals previous fortunes containers 
  previousC.appendChild(newLi);

  // taking random function (floor an math) and assigning it to a variable then grabbing an array element from fortunesList 
  //   changing innerHTML element to display new fortune saying from the aray list that it's selected from. 

  var randomN = Math.floor(Math.random() * fortunesList.length);
  var newSaying = fortunesList[randomN];
  fortuneT.innerHTML = newSaying;

}

// The following data list is provided for you to use in your code.
var fortunesList = [
  "People are naturally attracted to you.",
  "You learn from your mistakes... You will learn a lot today.",
  "If you have something good in your life, don't let it go!",
  "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
  "Your shoes will make you happy today.",
  "You cannot love life until you live the life you love.",
  "Be on the lookout for coming events; They cast their shadows beforehand.",
  "Land is always on the mind of a flying bird.",
  "The man or woman you desire feels the same about you.",
  "Meeting adversity well is the source of your strength.",
  "A dream you have will come true.",
  "Our deeds determine us, as much as we determine our deeds.",
  "Never give up. You're not a failure if you don't give up.",
  "You will become great if you believe in yourself.",
  "There is no greater pleasure than seeing your loved ones prosper.",
  "You will marry your lover.",
  "The greatest love is self-love.",
  "A very attractive person has a message for you.",
  "You already know the answer to the questions lingering inside your head.",
  "It is now, and in this world, that we must live.",
  "You must try, or hate yourself for not trying.",
  "You can make your own happiness.",
  "The greatest risk is not taking one.",
  "The love of your life is stepping into your planet this summer.",
  "Love can last a lifetime, if you want it to.",
  "Adversity is the parent of virtue.",
  "Serious trouble will bypass you.",
  "A short stranger will soon enter your life with blessings to share.",
  "Now is the time to try something new.",
  "Wealth awaits you very soon.",
  "If you feel you are right, stand firmly by your convictions.",
  "If winter comes, can spring be far behind?",
  "Keep your eye out for someone special.",
  "You are very talented in many ways.",
  "A stranger, is a friend you have not spoken to yet.",
  "A new voyage will fill your life with untold memories.",
  "You will travel to many exotic places in your lifetime.",
  "Your ability for accomplishment will follow with success.",
  "Nothing astonishes men so much as common sense and plain dealing.",
  "Its amazing how much good you can do if you dont care who gets the credit.",
  "Everyone agrees. You are the best.",
  "LIFE CONSISTS NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.",
  "Jealousy doesn't open doors, it closes them!",
  "It's better to be alone sometimes.",
  "When fear hurts you, conquer it and defeat it!",
  "Let the deeds speak.",
  "You will be called in to fulfill a position of high honor and responsibility.",
  "The man on the top of the mountain did not fall there.",
  "You will conquer obstacles to achieve success.",
  "Joys are often the shadows, cast by sorrows.",
  "Fortune favors the brave."
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var changeBackColor = function() {
  //generate random red, green and blue intensity
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  //   document.getElementById("titleDiv").style.color = "lightblue";

}

var changeTextColor = function() {
  //generate random red, green and blue intensity
  var r = getRandomInt(0, 255);
  var g = getRandomInt(0, 255);
  var b = getRandomInt(0, 255);
  document.getElementById("titleDiv").style.color = "rgb(" + r + "," + g + "," + b + ")";

}

// for the random back color button - will call two functions - this randomly changes the color for the background and the text at the same time. 
var runRandomColor = function() {
  changeBackColor();
  changeTextColor();
}