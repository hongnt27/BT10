let a = [1,2,3,2,3,4,6,7]

let newMap = a.map((item, index, array) =>{
    return item*item
})
console.log(newMap);