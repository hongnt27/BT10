let a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
let sum = 0
for (let index = 0; index < a.length; index++) {
    sum += a[index]
} 
let sotb = Math.round(sum / (a.length))

console.log(`Min : ${Math.min(...a)}, Max: ${Math.max(...a)}, So trung binh: ${sotb}`);