    var words = [
        "javascript",
        "monkey",
        "amazing",
        "pancake",
        "lifeboat",
        "jdm",
        "fast",
        "phone"
    ];

    var word = words[Math.floor(Math.random() * words.length)];

    var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    var remainingLetters = word.length;
    var guesses = 10;

    while (remainingLetters > 0) {
        alert(answerArray.join(" "));
        if (guesses < 1) {
            alert("Too many guesses please try again.");
            break;
        }

        var guess = prompt("Guess a leter or click cancel to stop playing").toLowerCase();

        guesses--;
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert("please enter a single letter");
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    if (answerArray[j] === "_") {
                        answerArray[j] = guess;
                        remainingLetters--;
                    } else {
                        alert("You have entered that letter already.");
                    }
                }
            }
        }
    }

    alert(answerArray.join(" "));
    alert("Good job! the answer was " + word);