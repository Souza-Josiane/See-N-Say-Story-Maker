// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// List of words for each button.
var nouns1 = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables to store words selected by the user
var selectedNoun1 = '';
var selectedVerb = '';
var selectedAdjective = '';
var selectedNoun2 = '';
var selectedPlace = '';

// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the buttons that speaks the text contained in each list and the phrase generated.
// Btn 1
// Add a click event to the button with ID 'btnNoun1', and when the button is clicked, execute an anonymous function.
document.getElementById('btnNoun1').addEventListener('click', function () {
	// Get a random noun from the 'nouns1' array using the getRandomWord function
	selectedNoun1 = getRandomWord(nouns1);
	// Speak the selected noun using the speakNow function
	speakNow(selectedNoun1);
	// Display the selected noun in the element with the id 'displayWordN1'
	document.getElementById('displayWordN1').innerHTML = selectedNoun1;
});

// Same behavior for buttons 1 to 5

// Btn 2
document.getElementById('btnVerb').addEventListener('click', function () {
	selectedVerb = getRandomWord(verbs);
	speakNow(selectedVerb);
	document.getElementById('displayWordV').innerHTML = selectedVerb;
});

// Btn 3
document.getElementById('btnAdjective').addEventListener('click', function () {
	selectedAdjective = getRandomWord(adjectives);
	speakNow(selectedAdjective);
	document.getElementById('displayWordA').innerHTML = selectedAdjective;
});

// Btn 4
document.getElementById('btnNoun2').addEventListener('click', function () {
	selectedNoun2 = getRandomWord(nouns2);
	speakNow(selectedNoun2);
	document.getElementById('displayWordN2').innerHTML = selectedNoun2;
});

// Btn 5
document.getElementById('btnPlace').addEventListener('click', function () {
	selectedPlace = getRandomWord(places);
	speakNow(selectedPlace);
	document.getElementById('displayWordP').innerHTML = selectedPlace;
});

// Btn Phrase
document.getElementById('btnSpeak').addEventListener('click', function () {
	// Combine all selected words to form a phrase
	var generatedPhrase = selectedNoun1 + ' ' + selectedVerb + ' ' + selectedAdjective + ' ' + selectedNoun2 + ' ' + selectedPlace;
	// Speak the generated phrase using the speakNow function
	speakNow(generatedPhrase);
});

// Btn Reset
document.getElementById('btnReset').addEventListener('click', function() {
	// Reset all selected words to empty strings
    selectedNoun1 = '';
    selectedVerb = '';
    selectedAdjective = '';
    selectedNoun2 = '';
    selectedPlace = '';

	// Clear the generated phrase
	generatedPhrase = '';

	// Clear the display of each selected word
	document.getElementById('displayWordN1').innerHTML = '';
	document.getElementById('displayWordV').innerHTML = '';
	document.getElementById('displayWordA').innerHTML = '';
	document.getElementById('displayWordN2').innerHTML = '';
	document.getElementById('displayWordP').innerHTML = '';
});

/* Functions
-------------------------------------------------- */
function getRandomWord(listOfWords) {
	// This generates a random index within the valid range for the word list.
	return listOfWords[Math.floor(Math.random() * listOfWords.length)];
}

function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
