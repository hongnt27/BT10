let array = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1];
let k = 26
let check = false
function find(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            for (let h = 0; h < array.length; h++) {
                if((array[i]+array[j]+array[h]) == k)
                return true
            }
        }
    }
    return false
}

if(find(array)) console.log("YES");
else console.log("NO");