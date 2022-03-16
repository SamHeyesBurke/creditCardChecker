

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

    if(sum === 0) {
        return "Invalid 😞";
    }
    else if (sum % 10 == 0) { // check if the modulus 10 equals zero (luhn algorithm)
      return "Valid 🎉"; // if so return true, card is valid
    } else {
      return "Invalid 😞"; // if not return false, card is invalid
    }  
  }





  function getResult () {
    let result = document.getElementById("creditCard").value;
   
    let arr = Array.from(result.toString()).map(Number);
     document.getElementById('isValid').innerHTML = validateCred(arr);


    if (arr.includes(NaN) || (arr.length >16 || arr.length <15) || arr.includes(",")) {
        document.getElementById("warningMessage").innerHTML = "ERROR. A credit card is a 15-16 digit number"
    } else {
        document.getElementById("warningMessage").innerHTML = ""

    }

    if (document.getElementById('isValid').innerHTML == "Invalid 😞") {
        document.getElementById('isValid').style.color = "red";
    } else {
        document.getElementById('isValid').style.color = "green"
    }

    let companyNum = ""
        if(arr[0] === 3) {
        companyNum = "Amex (American Express)"
        } else if (arr[0] === 4) {
            companyNum = "Visa"
        } else if (arr[0] === 5) {
            companyNum = "Mastercard"
        } else if (arr[0] === 5) {
            companyNum = "Discover"
        } else {
            companyNum = "Company not found"
        }

    document.getElementById("companyName").innerHTML = companyNum;

    if (companyNum === "Company not found") {
      document.getElementById("companyName").style.color = "red";
    } else {
      document.getElementById("companyName").style.color = "green"
    }

    }
  


