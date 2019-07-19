
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter returns something
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee to myNewArray
//after looping, return  myNewArray

let arr1 = [1, 4, 5, 2, 3];

function map(array, iteratee){
    let myNewArray = [];
    for(let i = 0; i < array.length; i++) {
        myNewArray.push(iteratee(array[i]));
      }
  return myNewArray;
}

function iteratee1(param){
  return param + 10;
}

map(arr1, iteratee1); //returns [11, 14, 15, 12, 13]


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray
let arr2 = [1, 4, 5, 2, 3];

function iteratee2(param){
   return param >= 4;
};

function filter(array, iteratee){
    let myNewArray = [];
    for (let i = 0; i < array.length; i++) {
       if (iteratee(array[i])){
        myNewArray.push(array[i]);
      }
    }
    return myNewArray;
  }

filter(arr2, iteratee2); // returns [4, 5]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//create a function called `find`, it should take 2 parameters `theArray` and `fnc`
//loop theArray and call the fnc for each thing in the array, 
//     passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null

let arr = [2, 4, 1, 3, 7, 8, 16];

function find(theArray, fnc){
    for (let i=0; i<theArray.length; i++){
      if(fnc(theArray[i])){
        let firstItem = theArray[i];
        console.log(firstItem);
        return firstItem;    
    }
  }
}

function fnc(item){
  return item > 7;
}

find(arr, fnc); // returns 8

//return the last item in theArray
function findLast(theArray){
  console.log(theArray[theArray.length-1]);
  return theArray[theArray.length-1];
}

findLast(arr); // return 16

//return the first element of the array
function head(theArray){
  console.log(theArray[0]);
  return theArray[0];
}

head(arr); // returns 2

//create a new array
//loop theArray in reverse order
//add the item from each loop to the new array
//return the new array

let newArr = [7, 9, 3, 2, 1, 5];

function reverse(theArray){
  let reversedArr = [];
  for (let i= theArray.length-1; i>=0; i--){
    reversedArr.push(theArray[i]);
  }
  console.log(reservedArr);
  return reservedArr;
}

reverse(newArr);

//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array



function tail(theArray){
  let newArr = [];
  for (let i=1; i<theArray.length; i++){
    newArr.push(theArray[i]);
  }
  console.log(newArr);
  return newArr;
}

tail(newArr);

//implement the most basic sorting algorithm there is
//assume the array will always have numbers
//use a while loop to constantly loop theArray until it is sorted
//use a for loop to loop theArray
//look at the current item and the next item, compare them
//if the items are out of order, swap them
//initialize a variable that indicates if a swap had to be done, set it to false
//if a swap is done set it to true
//after each for loop check the variable, if true, continue the while loop
//if false return theArray

let sortArr = [22, 5, 11, 2, 0, 18, 3, 9];

function sort(theArray){
  let sorted = false;
  while (sorted === false){
    let swapped = false;
    for(let i = 0; i < theArray.length; i++) {
        if(theArray[i] > theArray[i + 1]) {
            let swap = theArray[i];
            theArray[i] = theArray[i + 1];
            theArray[i + 1] = swap;
            swapped = true;
        } 
    }
    if(!swapped) {
        sorted = true;
    }
}
return theArray;
}

sort(sortArr);

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;
