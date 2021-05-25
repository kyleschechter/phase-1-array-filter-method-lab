// Code your solution here
function findMatching(array, string) {
   const newArray = array.filter(name => name.toLowerCase() === string.toLowerCase())
   return newArray
}

function fuzzyMatch(array, letter) {
    const newArray = array.filter(name => name.charAt(0) === letter.charAt(0))
    return newArray
 }

 function matchName(array, string) {
    const match = array.filter(driver => driver.name === string)
    return match
 }