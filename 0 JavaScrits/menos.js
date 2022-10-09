arr = [3,6,1,8,9];
let menor=0;
let mayor=0;

function sum(arr){

for(i=0 ; i<arr.length ; i++){
    if (arr[i] > mayor) {
        mayor = arr[i];
    } else{
        menor = arr[i];
    }
}
return mayor-menor;
}

console.log(sum(arr));
