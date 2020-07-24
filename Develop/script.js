// // Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {



let passLength = parseInt(prompt('How long do you want your password to be between 8 to 128 characters?'))

  if ( passLength < 7 || passLength > 129) {
    alert('Pick a valid number!')
    return
  }
    
let upperConfirm = confirm('Do you want uppercase characters?')
let lowerConfirm = confirm('Do you want lowercase characters?')
let numberConfirm = confirm('Do you want numerical characters?')
let specialConfirm = confirm('Do you want special characters?')


let characters = {

  upperCase : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowerCase : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  special : ['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']
}

let password = ""

for (let i = 0; i < passLength; i ++) {

  let pick = Math.floor(Math.random() * 4)
  
  if (pick === 0) {

    if (upperConfirm === true) {
      let change = characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
      password= password + change
    } else {
      i--
    }
  } else if (pick === 1) {
    if (lowerConfirm === true) {
      let change = characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
      password= password + change
    } else {
      i--
    }
  } else if (pick === 2) {
    if (numberConfirm === true) {
      let change = characters.numbers[Math.floor(Math.random() * characters.numbers.length)]
      password= password + change
    } else {
      i--
    }
  } else {
    if (specialConfirm === true) {
      let change = characters.special[Math.floor(Math.random() * characters.special.length)]
      password= password + change
    } else {
      i--
    }
  }
}

document.getElementById('password').innerHTML = `${password}` 

}
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);







// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", writePassword);
// function writePassword() {
//   let passLength = parseInt(prompt('Between 8 - 128, how long would you want your password?'))
//   if (passLength < 8 || passLength > 128) {
//     alert('Pick a Valid Number!')
//     return
//   }
//   let upperConfirm = confirm('Would you like uppercase?')
//   let lowerConfirm = confirm('Would you like lowercase?')
//   let numberConfirm = confirm('Would you like numbers?')
//   let specialConfirm = confirm('Would you like special characters?')
//   let characters = {
//     upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
//     lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
//     numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
//     special: ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']
//   }
//   let password = ''
//   for (let i = 0; i < passLength; i++) {
//     let pick = Math.floor(Math.random() * 4)
//     if (pick === 0) {
//       if (upperConfirm === true) {
//         let change = characters.upperCase[Math.floor() * characters.upperCase.length]
//         password = password + change
//       } else {
//         i--
//       }
//     } else if (pick === 1) {
//       if (lowerConfirm === true) {
//         let change = characters.lowerCase[Math.floor() * characters.lowerCase.length]
//         password = password + change
//       } else {
//         i--
//       }
//     } else if (pick === 2) {
//       if (numberConfirm === true) {
//         let change = characters.numbers[Math.floor() * characters.numbers.length]
//         password = password + change
//       } else {
//         i--
//       }
//     } else {
//       if (specialConfirm === true) {
//         let change = characters.special[Math.floor() * characters.special.length]
//         password = password + change
//       } else {
//         i--
//       }
//     }
//   }
// }

// document.getElementById('password').innerHTML = `${password}` 

// }
// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);

// // Add event listener to generate button
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");
// //   passwordText.value = password;
// // }










// generateBtn.addEventListener("click", writePassword);

// function createPassword() {
//   let passwordLength = parseInt(prompt("what length do you want your password"))
//   if(passwordLength < 8 || passwordLength > 128) {
//     alert('please choose valid number')
//     return
//   }
  
//   let lowerCase = "abcdefghijklmnopqrstuvwxyz"
//   let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//   let specChar  = "!@#$%^&* "
//   let numeric  = "123456789"


//   let randoPass = ""
//   let lowerconfirm = confirm("do you want lower")
//   let upperconfirm = confirm("do you want upper")
//   let specialconfirm = confirm("do you want special")
//   let numsconfirm = confirm("do you want numbers")
//   let selectedChars = ""

//   if (lowerconfirm) {
//     selectedChars += lowerCase
//   }

//   if (upperconfirm) {
//     selectedChars += upperCase
//   }

//   if (specialconfirm) {
//     selectedChars += specChar
//   }

//   if (numsconfirm) {
//     selectedChars += numeric
//   }

//   for (let i = 0; i <passwordLength; i++) {

//   }
//   selectedChars

// }

// //generateBtn.addEventListener("click", writePassword);







// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
// let special = ['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

// //Variable options
// var ConfirmLength
// var ConfirmupperCase
// var ConfirmlowerCase
// var ConfirmnumberCharacter
// var ConfirmspecialCharacter


// function generatePassword() {
//   ConfirmLength = (prompt(`How many characters long do you want your password`));

//   while(ConfirmLength <= 7 || ConfirmLength >= 129 ); {
//     alert(`Password must be between 8-128 characters`);
//     ConfirmLength = (prompt(`How many characters long do you want your password`)
//    )}

// }

// alert(`Your password will have ${ConfirmLength} amount of Characters`)
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
