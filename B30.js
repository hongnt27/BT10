let arr =[1,1,1,1,1,1,1,1,1,1]

arr.sort((a,b) => b-a)
let max2 = arr[0]
let check = false
for (let index = 1; index < arr.length; index++) {
    if(max2 != arr[index]){
        max2 = arr[index]
        check = true
        break;
    }
}
if(check)   console.log(max2);
else    console.log(-1);   