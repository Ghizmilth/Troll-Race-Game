//Wait for document to be ready
$(document).ready(function () {
console.log('You can code NOW!')

var moveBox = 1;

//Detects which key has been pressed so it moves player
$(document).keydown(function(press) {
    if (press.keyCode === 39) {
    console.log('right arrow has been pressed times');
    moveBox += 1;
    moveCar(moveBox);
    console.log(moveBox);
    } else {
      return;
    }

  })
});


//This function moves the player from left to right
function moveCar(moveBox) {

  if (moveBox !== 25) {
  $('#box'+moveBox).css("background-color", "green");
  $('#box' + (moveBox-1)).css("background-color", "lightblue");
  console.log("box number " + moveBox  + " " + "has been ocupied");
} else {
  console.log("can't move any more");
  return;
}
//    }

//  } else
    //return;
  //  console.log("can't move no more");
//}

};
