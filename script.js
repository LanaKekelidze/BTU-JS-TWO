// first-work 

let numbersArray = [5, 25, 89, 120, 36];
numbersArray.push('javascript', 'python');
numbersArray.unshift('html', 'css')

for(let i =0; i < numbersArray.length; i += 1){
    console.log(numbersArray.length);
    break;
}

numbersArray.pop();
numbersArray.shift()

console.log(numbersArray);

// second-work 


let names = ['orange', 'banan','pear'];

for(let i =0; i < names.length; i += 1){
    console.log(names.length);
    break;
}
names.push('apple', 'ananas');
names.unshift('Watermelon')
for(let i =0; i < names.length; i += 1){
    console.log(names.length);
    break;
}
names.splice(2, 0, 'mango');

names.pop();
names.shift()
for(let i =0; i < names.length; i += 1){
    console.log(names.length);
    break;
}

console.log(names);

// third-work
let band= {
    band: 'The Beatles',
    song: 'All My Loving',
    Year: 1963
}
Object.keys(band).forEach( (item) => {
    console.log(item);
})


// forth-work
let song= {
    band: 'The Beatles',
    song: 'All My Loving',
    Year: 1963
}

for (let i of Object.values(song)) {
    console.log(i);
}

// fivth-work

let manyNumber= [12, 25, 3, 6, 8, 14, 7, 23];

let number = manyNumber.map( (x)  => x / 3);

console.log(number);

// sixth-work

let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let arraySame = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

let newArray = arraySame.filter( (x) => typeof x == 'number');
console.log(newArray);