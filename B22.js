let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
let sum = 0
let max = 0
let min = 10
for (let index = 0; index < a.length; index++) {
    sum += a[index]
    if(a[index] > max) max = a[index]
    if(a[index] < min) min = a[index]
} 
let sotb = Math.round(sum / (a.length))

console.log(`Min : ${min}, Max: ${max}, So trung binh: ${sotb}`);