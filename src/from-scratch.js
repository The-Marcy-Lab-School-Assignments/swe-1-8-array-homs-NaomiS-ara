// find
const getUserById = (users, id) => { };
 // 'users' is an array of user objects
  // 'id' is the number we’re looking for
return users.find(user => user.id === id)
// go through each 'user' in the 'users' array
  // check if user.id equals the 'id' we passed in
  // if it matches, return that user object
  // if no match, return undefined automatically

//arrow function version =
//const getUserById = (users, id) => users.find(user => user.id === id);


// findIndex
const getIndexOfApple = (index) => { };
return foods.findIndex(food => food.name === "apple");


// reduce
const getSquaredTotal = () => { };
getSquaredTotal([1, 2, 3]);
// → 14 (1*1 + 2*2 + 3*3)
return getSquaredTotal.reduce(Squared => Squared.reduce === "");


// every
const hasOnlyEvenNumbers = () => { };

// some
const anyGreaterThan10 = () => { };

// Use your judgement to decide which array method to use!
const roundAll = () => { };

const onlyStrings = () => { };

const stringsToLength = () => { };

const totalGreaterThanGiven = () => { };

const numberOfLongWords = () => { };

const numberOfCharacters = () => { };

const removeJerkFromCompany = () => { };

const chosenCoordinates = () => { };

// Sorting Functions
const sortWords = () => { };

const sortNumbers = () => { };

const sortNumbersBetter = () => { };

const sortUsersByOrder = () => { };

const sortUsersByName = () => { };

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
