let a=[1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]
let d=[]
for(let i = 0; i < a.length; i++){
    d[a[i]]= 0
}
for(let i = 0; i < a.length; i++){
    d[a[i]]++
    // console.log(`${d[a[i]]}`);
}
let max = 1
let value = 1
for(i = 0; i < a.length; i++){
    if(max < d[a[i]]){
        max = d[a[i]]
        value = a[i]
    }
}
console.log(`${value}`)