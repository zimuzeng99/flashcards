activeCard = 1
numCards = 3

// Swipe right functionality
$("#right-arrow").on("click", function() {
  // Select the current card that's active
  currentCard = $(".flashcard:nth-child(" + activeCard + ")");
  // Active the swipe right animation
  currentCard.addClass("swipe-right");
  setTimeout(function() {
    // Once the animation is done, hide the card
    currentCard.removeClass("active");
    currentCard.removeClass("swipe-right")
  }, 400);

  // Make the next card active and display it with its jump animation
  activeCard++;
  if (activeCard > numCards) {
    activeCard = 1;
  }
  $(".flashcard:nth-child(" + activeCard + ")").addClass("active");
})

// Swipe left functionality, same as swipe right just swipes in the opposite
// direction
$("#left-arrow").on("click", function() {
  currentCard = $(".flashcard:nth-child(" + activeCard + ")");
  currentCard.addClass("swipe-left");
  setTimeout(function() {
    currentCard.removeClass("active");
    currentCard.removeClass("swipe-left")
  }, 400);


  activeCard--;
  if (activeCard < 1) {
    activeCard = numCards;
  }
  $(".flashcard:nth-child(" + activeCard + ")").addClass("active");
})
