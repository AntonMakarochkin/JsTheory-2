/* function findVowels(str) {
    let cound = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            cound++
        }
    }
    return cound;
}

console.log(findVowels("aet"));


 */



/* let pyka = {
    name: 'dora',
    howMuchmoneyIn2021: 10,
    howMuchmoneyIn2020: 5,
    howMuchmoneyIn2019: 1,
};


function cal(obj){
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
};

console.log(pyka);
cal(pyka);
console.log(pyka); */



/* const anton = {
    name: 'Anton',
    age: 25,
    logInfo: function(job, phone) {
        console.group(`Info ${this.name}`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}



const lena = {
    name: "Elena",
    age: 25,
}

anton.logInfo.bind(lena, 'work', '9+1231+1222')() */



/* const array = [1, 2, 3, 4, 5,];



const arr = [2, 3, 4, 5, 6, 7,];

Array.prototype.multi = function(n) {
    return this.map(function(i) {
        return i * n;
    })
}

console.log(arr.multi(2)) */
/* 
function plus (n) {
    return function (number) {
        return number + n;
    }
}

const x = plus(10);
console.log(x(5))
 */



/* function AlenaGol(name) {
    return function (fam) {
        return `Info: ${name} ${fam}`
    }
}

const alenaFam = AlenaGol('Alena')

console.log(alenaFam('gol')) */




/* function bind ( context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job} `)
}

const person1 = {
    name: 'Антон',
    age:'25',
    job:'ассистент',
}

bind(person1, logPerson)(); */



