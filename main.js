let a = parseInt(Math.random() * 20)
console.log(`a = ${a}`)
let result_juft = 0
let result_toq = 0
for (let i = 0; i <= a; i++) {
    if (i % 2 == 0) {
        console.log(i);
        result_juft += i
    }
    if (i % 2 !== 0) {
        console.log(i);
        result_toq += i
    }
}
console.log(`juft sonlar yigindisi ${result_juft}`);
console.log(`toq sonlar yigindisi ${result_toq}`);

let n = parseInt(Math.random() * 20)
console.log(`n = ${n}`)
let count = 0
for (let i = 0; i <= n; i++) {
    console.log(n - i)
}
console.log(`n = ${n}`)
for (let i = 0; i <= n; i++) {
    console.log(i)
    count += i
}
console.log('1dan n gacha sonlar yigindisi ' + count);
let b = parseInt(Math.random() * 20)
console.log(`b = ${b}`)
let count2 = 0
let summa = 0
for (let t = 0; t <= b; t++) {
    if (b % t == 0) {
        console.log(t)
        count2++
        summa = summa + t
    }
}
console.log(`count2 = ${count2}`)
console.log(`summa = ${summa}`)



