let a = [1,2,3,4,6,7]; 
let k = 5
let min = 1000
for (let index = 0; index < a.length; index++) {
    let x = Math.abs(a[index]-k)
    if(x < min) min = x 
}

let newFilter = a.filter((item, index, array)=>{
    return (min == Math.abs(item-k))
})
console.log(newFilter);