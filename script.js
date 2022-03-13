


function modulo () {
    if ((x % 2) ) {
        return x*2
    }
}



const validateCred = (card) => {
    let cardInverted = card.slice().reverse(); // make a copy of the card and invert the array right to left.
    for (let i=0; i < cardInverted.length; i++) { // check each index and pick out the even numbers
      if (i % 2 != 0) {
        cardInverted[i] = cardInverted[i] * 2; // double the value of the array at each even index
        if (cardInverted[i] > 9) {
          cardInverted[i] -= 9; // if the value is higher then 9 deduct it by 9
        }  
      }
    }
    let sum = cardInverted.reduce((a, b) => a + b, 0); // add all numbers of the array
    if (sum % 10 == 0) { // check if the modulus 10 equals zero (luhn algorithm)
      return "The card is valid!"; // if so return true, card is valid
    } else {
      return "The card is invalid!"; // if not return false, card is invalid
    }  
  }





  function getResult () {
    let result = document.getElementById("creditCard").value;
    document.getElementById('creditValue').innerHTML = result;
    let arr = Array.from(result.toString()).map(Number);
     document.getElementById('isValid').innerHTML = validateCred(arr);

    let warning = document.getElementById('warningMessage').innerHTML;

    if (arr.includes(NaN) || (arr.length >16 || arr.length <15)) {
        document.getElementById("warningMessage").innerHTML = " -INVALID  - A credit card is a 15-16 digit number"
    } else {
        document.getElementById("warningMessage").innerHTML = ""

    }
  }


