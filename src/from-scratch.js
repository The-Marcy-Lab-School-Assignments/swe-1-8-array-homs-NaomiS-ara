// find
const getUserById = (users, id) => users.find(user) => user.id === id);
 // 'users' is an array of user objects
  // 'id' is the number we’re looking for

// go through each 'user' in the 'users' array
  // check if user.id equals the 'id' we passed in
  // if it matches, return that user object
  // if no match, return undefined automatically

//arrow function version =
//const getUserById = (users, id) => users.find(user => user.id === id);


// findIndex
const getIndexOfApple = (foods) => { 
return foods.findIndex(food => food.name === "apple");
};

// reduce // += ok were these but dont want to put it twice
const getSquaredTotal = (arr) => {
return arr.reduce(SquaredTotal, current) =>
 return squaredTotal += (current * current) //current**
};
getSquaredTotal([1, 2, 3]);
// → 14 (1*1 + 2*2 + 3*3)


// every
const hasOnlyEvenNumbers = (numbers) => numbers.every( num => num % 2 === 0);
  

// some
const anyGreaterThan10 = (numbers) => numbers.some(num => num > 10);
   



// Use your judgement to decide which array method to use!
const roundAll = (numbers) => numbers.map(num => Math.round(num));
// need to transform every element of the array into a new value. .map() creates a new array by applying a function to each element of the original array.




const onlyStrings = (values) => values.filter(value => typeof value === "string");
// We're not transforming items-- we're **filtering (keeping only certain ones) .filter() goes through every element and keeps only those where the condition returns true



const stringsToLength = (strings) => strings.map(str => str.length);
// for this one we want to transform each string into its length -- .map() loops through every element in the array and creates a new array with the results of the function you define



const totalGreaterThanGiven = (numbers, limit) =>
 numbers.reduce((sum, num) => sum + num, 0) > limit;
// We're taking a list of numbers and combining them into one value (a total)
// .reduce() takes all the elements in an array and "reduces" them down to a single value.

// How it works.. accumulator starts with initialValue.
// For each element, you update the accumulator however you like (in our case, by adding).
//At the end, .reduce() gives you the final accumulated result.


const numberOfLongWords = (words) => 
  words.filter(word => word.length > 4).length;
// we want to keep only certain elements that match a condition-- that means we should use .filter()
// .filter() returns a new array with only the elements that pass a test 
// that means we can use .length to count how many were kept


const numberOfCharacters = (str) => // .reduce() lets us go through each character and build up an object as we go
  str.split("").reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }
// how to do this;
//  we need to go through each character in string
// keep track of how many times weve seen it
// store those counts in an object (key= character,value = count)


const removeJerkFromCompany = (company) => {
  const index = company.findIndex(person => person.personality === "jerk");
  if (index !=== -1) company.splice(index, 1);
};



const chosenCoordinates = (coordinates, target) => 
  coordinates.find(pair[0] + pair[1] === target);



// Sorting Functions
const sortWords = (words) => [...words].sort();


const sortNumbers = (numbers) => [...numbers].sort((a, b) => a - b);

const sortNumbersBetter = (numbers, isDecending = false) => 
[...numbers].sort((a, b) => (isDecending ? b - a : a - b));

const sortUsersByOrder = (users) => [...users].sort((a, b) => a.order - b.order);

const sortUsersByName = (users) => 
[...users].sort((a, b) => a.name.localeCompare(b.name));

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
