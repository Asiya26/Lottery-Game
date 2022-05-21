let array = []
for(var i = 1; i < 50 ; i++){
    array.push(i)
}

for(var i = 0; i < 6 ; i++){
    const randomElement = i + Math.floor(Math.random() * (array.length - i));
    let tempValue = array[randomElement]
        array[randomElement] = array[i];
        array[i] = tempValue;
        
        
}
//  array.splice(6)
array.splice(6)
array.sort((a, b) => a - b)
console.log(array)

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 11, 11, 12, 13, 14, 15, 16, 17, 5, 18, 19, 20, 21,  22, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49
// randomIndex = 22
// currentIndex = 0
// array[randomIndex] = 21
// array[currentIndex] = 1

// let test = array[Math.floor(Math.random() * array.length)]
// [2, 3, 4, 5, 6, 7, 8, 9, 6, 11, 11, 12, 13, 14, 15, 16, 17, 5, 18, 19, 20, 21,  22, 23, 24, 25, 26, 27, 28, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]

// const randomElement = i + Math.floor(Math.random() * (array.length - i));
// let tempValue = array[randomElement]
//     array[randomElement] = array[i];
//     array[i] = tempValue;
