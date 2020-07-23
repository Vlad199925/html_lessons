var numbers = [1, 5342, 42, 3, 2, 5];
var words = ["one","word","car","dsdqweqwesadsd","ubersupermegaultra"];

numbers.forEach((n,i,numbers)=>{
    console.log(n%2=='0')
})

let newWords = words.filter((n)=>{
    return n.length === 3; 
})
console.log (newWords);

let NewNumbers = numbers.map((number)=>{
    return number*2 
})
console.log(NewNumbers);

let summary = numbers.reduce((accumulate,n)=>{
    return accumulate+n;
},1000)
console.log(summary);

let reverse = numbers.reverse();
console.log(reverse);
// FIne new functions применить их на практике (разбиение массива).