let a = [1,2,3,2,3,4,6,7]
function isPrime(a){
    if(a < 2)   return false
    for(let i = 2; i <= Math.sqrt(a); i++){
        if(a % i == 0)  return false
    }
    return true
}

let newFilter = a.filter((item, index, array) =>{
    return (isPrime(item) == true)
})
console.log(newFilter);